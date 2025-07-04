import os
from typing import Any, Dict
import numpy as np
import pandas as pd
from .enumerate_clips import enumerate_clips
from .extract_features import extract_aggregated_features,extract_features
from Helpers import write_json,read_json

def prepare_aggregated_feature_dataframe(audioSourceDirectory:str, useFreshData:bool=False)-> pd.DataFrame:
    feature_list:list[dict[str, np.floating[Any]]]=[]

    clip_names:list[str]=[]

    if useFreshData or not os.path.exists("aggregated_features.csv"):
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


        df_features.to_csv("aggregated_features.csv", index=False)  # Save features to CSV for debugging/reuse
    else:
        df_features = pd.read_csv("aggregated_features.csv")
    
    return df_features


def prepare_features(audioSourceDirectory:str, useFreshData:bool=False)->Dict[str,Dict[str, np.floating]]:
    feature_list:Dict[str,Dict[str, np.floating]] = dict()
    
    if useFreshData or not os.path.exists("features.json"):
        #process each file 
        for clip_name,clip_data,sampling_rate in enumerate_clips(audioSourceDirectory):
            feature_list[clip_name] = extract_features(clip_data,sampling_rate)
            break

        write_json("features.json",feature_list)
    else:
        feature_list = read_json("features.json")

    #TODO potential dataype mismatch np.floating vs float
    return feature_list

        


