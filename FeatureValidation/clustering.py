

import os
from typing import Any, Literal
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
from sklearn.discriminant_analysis import StandardScaler
from sklearn.preprocessing import MinMaxScaler, RobustScaler
# from clustering_types.dbscan import dbscan_clustering
# from clustering_types.hierarchical import hierarchical_clustering
from clustering_types.dbscan import dbscan_clustering
from clustering_types.hierarchical import hierarchical_clustering
from clustering_types.kMeans import kmeans_clustering
from FeatureExtraction import prepare_aggregated_feature_dataframe


def cluster_features(audioSourceDirectory,clusteringType:Literal["kmeans","hierarchical","dbscan"],useFreshData:bool=False):
    
    df_features= prepare_aggregated_feature_dataframe(audioSourceDirectory, useFreshData)
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




    