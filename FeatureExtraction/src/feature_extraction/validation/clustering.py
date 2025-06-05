

import os
from typing import Any, Literal
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
from sklearn.discriminant_analysis import StandardScaler
from sklearn.preprocessing import MinMaxScaler, RobustScaler
from feature_extraction.enumerate_clips import enumerate_clips
from feature_extraction.extract_features import extract_aggregated_features
# from clustering_types.dbscan import dbscan_clustering
# from clustering_types.hierarchical import hierarchical_clustering
from feature_extraction.validation.clustering_types.dbscan import dbscan_clustering
from feature_extraction.validation.clustering_types.hierarchical import hierarchical_clustering
from feature_extraction.validation.clustering_types.kMeans import kmeans_clustering
import re


def cluster_features(audioSourceDirectory,clusteringType:Literal["kmeans","hierarchical","dbscan"],useFreshData:bool=False):
    
    feature_list:list[dict[str, np.floating[Any]]]=[]

    clip_names:list[str]=[]

    if useFreshData or not os.path.exists("features.csv"):
        # Process each file in the dataset
        for clip_name,clip_data,sampling_rate in enumerate_clips(audioSourceDirectory):

            clip_names.append(clip_name)
            features = extract_aggregated_features(clip_data, sampling_rate)
            feature_list.append(features)
            

        columns = ["clip_name", *feature_list[0].keys()] 
        #convert the feature list to a list of lists with each list containing values of a single key from the feature_list
        #feature_matrix = [[clip_name,(feature_value for feature_value in feature.values())] for feature,clip_name in zip(feature_list,clip_names)] hadd generator fucntion for feature.values()
        #feature_matrix = [[clip_name, list(feature.values())] for feature, clip_name in zip(feature_list, clip_names)] had sub array ['american_idiot,['0.23','0.45',...]] for each clip
        feature_matrix = [[clip_name, *feature.values()] for feature, clip_name in zip(feature_list, clip_names)] # got correct syntax for ['american_idiot,'0.23','0.45',...] 
        
        
        
        # Convert the list of features to a DataFrame
        df_features = pd.DataFrame(feature_matrix, index=clip_names, columns=columns)


        df_features.to_csv("features.csv", index=False)  # Save features to CSV for debugging
    else:
        df_features = pd.read_csv("features.csv")
    # Normalize the features
    #df_normalized = (df_features - df_features.mean()) / df_features.std()
    #df_normalized.fillna(0, inplace=True)  # Handle NaN values


    #print("NaN values present:", np.isnan(df_features.iloc[:, 1:]).any())
    #print("Infinite values present:", np.isinf(df_features.iloc[:, 1:]).any())

    # Replace NaN with column mean (or 0)
    #features = np.nan_to_num(df_features.iloc[:, 1:], nan=0.0)

    # Replace Infs with max finite value
    #df_features[df_features == np.inf] = np.max(df_features[df_features != np.inf])

    # Normalize features
    #scaler = StandardScaler()
    scaler = MinMaxScaler()
    #scaler = RobustScaler() # Use RobustScaler to handle outliers better....ompressed data too much .completely noise
    
    normalized_features = scaler.fit_transform(df_features.iloc[:, 1:])  # Ignore non-numeric columns    

    df_normalized = pd.DataFrame(normalized_features, columns=df_features.columns[1:])

    feature_weights = {
        "harmonic_distortion_ratio_mean": 2.0,  
        "spectral_flatness_mean": 1.8,  
        "spectral_centroid_mean": 1.2,  
        "rms_energy_mean": 1.0
    }

    for feature, weight in feature_weights.items():
        df_normalized[feature] *= weight  # Manually emphasize distortion attributes

    #print(df_normalized.columns) 

    # Perform clustering based on the specified type
    if clusteringType == "kmeans":
        kmeans_clustering(df_features,df_normalized)
    elif clusteringType == "hierarchical":
         hierarchical_clustering(df_features,df_normalized)
    elif clusteringType == "dbscan":
        dbscan_clustering(df_features,df_normalized)

    cluster_counts = df_features["Cluster"].value_counts().sort_index()

    print(cluster_counts)  # Shows how many samples belong to each cluster

    # Extract song name from clip name
    clips = df_features['clip_name']
    df_features["Song"] = clips.apply(lambda x: re.match(r"(.*?\.mp3)", x).group(1) if re.match(r"(.*?\.mp3)", x) else x) # type: ignore

    # Group by cluster
    cluster_groups = df_features.groupby("Cluster")["Song"].unique()

    # Print song names per cluster
    for cluster, songs in cluster_groups.items():
        print(f"Cluster {cluster}:")
        for song in sorted(songs):  # Sort for better readability
            print(f"  - {song}")
    print("\n")

    # Plot
    plt.figure(figsize=(12, 6))
    plt.bar(cluster_counts.index, cluster_counts.values, color="royalblue")

    # Labeling
    plt.xlabel("Cluster Number")
    plt.ylabel("Number of Songs")
    plt.title("Distribution of Songs Across Clusters")
    plt.xticks(cluster_counts.index)  # Ensure all clusters appear in x-axis

    #       Show plot
    plt.show()




    