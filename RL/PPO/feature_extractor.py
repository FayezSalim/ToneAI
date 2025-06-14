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
