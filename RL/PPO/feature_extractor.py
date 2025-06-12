import torch
import torch.nn as nn
import librosa
import numpy as np
from stable_baselines3.common.torch_layers import BaseFeaturesExtractor
import os
from FeatureExtraction import extract_features,selected_feature_keys

class AudioFeatureExtractor(BaseFeaturesExtractor):
    def __init__(self, observation_space, features_dim=64):
        
        super(AudioFeatureExtractor, self).__init__(observation_space, features_dim)

        # Define a neural network to process extracted features
        self.network = nn.Sequential(
            nn.Linear(observation_space.shape[0], 128),
            nn.ReLU(),
            nn.Linear(128, features_dim),
            nn.ReLU()
        )

    def forward(self, obs):
        return self.network(obs)

# Feature extraction function to take guitar only clips after sepratoin using demucs and selction by user
def extract_audio_features(audio_clip_data,sampling_rate):
    
    # Extract meaningful features
    features  = extract_features(audio_clip_data,sampling_rate)

    # Create feature vector
    feature_vector = np.hstack([features[key] for key in selected_feature_keys])
    return feature_vector.astype(np.float32)