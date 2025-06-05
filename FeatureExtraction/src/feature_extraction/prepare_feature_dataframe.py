

import os
from typing import Any
import numpy as np
import pandas as pd

from feature_extraction.enumerate_clips import enumerate_clips
from feature_extraction.extract_features import extract_aggregated_features


def prepare_aggregated_feature_dataframe(audioSourceDirectory:str, useFreshData:bool=False):
    """
    Prepares a DataFrame with specified feature columns.

    Args:
        df (pd.DataFrame): The input DataFrame.
        feature_columns (list): List of columns to include in the feature DataFrame.

    Returns:
        pd.DataFrame: A DataFrame containing only the specified feature columns.
    """
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


        df_features.to_csv("features.csv", index=False)  # Save features to CSV for debugging/reuse
    else:
        df_features = pd.read_csv("features.csv")
    
    return df_features