from typing import Any
import gymnasium as gym
from gymnasium import spaces
import numpy as np
from ActionSpace.define import initialize_discrete_action_space
from FeatureExtraction import selected_feature_keys

class ToneAIEnv(gym.Env[Any,spaces.MultiDiscrete]):
    
    def __init__(self):

        super(ToneAIEnv, self).__init__()

        discrete_action_space = initialize_discrete_action_space()

        vector = [ len(model) for model in discrete_action_space.components.values()]

        # Define action space: selecting amp, cab, distortion, signal chain order
        self.action_space = spaces.MultiDiscrete([
            #len(helix_data["amps"]),      # Amp selection
            #len(helix_data["cabs"]),      # Cab selection
            #len(helix_data["distortions"]), # Distortion selection
            *vector,
            len(discrete_action_space.signal_chain_order)  # Signal chain ordering (3 predefined orders)
        ])

        # Define state space: Extracted audio features
        self.observation_space = spaces.Box(low=-1.0, high=1.0, shape=(len(selected_feature_keys),), dtype=np.float32)  # Adjust feature dimensions

        self.target_audio = self.load_target_audio()  # Load target reference tone
        self.target_audio = self.extract_audio_features(audio_clip_path)

    
    def step(self, action):
        amp, cab, distortion, chain_order = action
        
        processed_audio = self.apply_helix_preset(amp, cab, distortion, chain_order)
        feature_vector = self.extract_audio_features(processed_audio)
        
        reward = self.compute_tone_similarity(feature_vector, self.target_audio)
        done = False  # Adjust as needed

        return feature_vector, reward, done, {}

    def reset(self):
        self.current_target_path = random.choice(self.audio_dataset)
        self.target_audio = self.extract_audio_features(self.current_target_path)
        return initial_state


    def render(self):
        pass  # Optional visualization methods

    def load_target_audio(self):
        """Load and process reference tone for comparison."""
        return extract_audio_features("target_clip.wav")

    def apply_helix_preset(self, amp, cab, distortion, chain_order):
        """Simulate tone processing based on action choices."""
        return simulate_audio(amp, cab, distortion, chain_order)  # Placeholder function

    def compute_tone_similarity(self, processed_features, target_features):
        """Reward function: Compute similarity between processed and target tone."""
        return -np.linalg.norm(processed_features - target_features)  # Minimize difference
    
    
    # Feature extraction function to take guitar only clips after sepratoin using demucs and selction by user
    def extract_audio_features(audio_clip_data,sampling_rate):
        
        # Extract meaningful features
        features  = extract_features(audio_clip_data,sampling_rate)

        # Create feature vector
        feature_vector = np.hstack([features[key] for key in selected_feature_keys])
        return feature_vector.astype(np.float32)
    

# Why Z-score Works Well for Your Setup
# ✅ Handles Variability in Feature Ranges – Since different features have different scales (e.g., spectral centroid in Hz vs. zero crossing rate as a fraction), Z-score normalization ensures each feature is standardized based on its own mean and standard deviation.
# ✅ Doesn’t Depend on Fixed Min/Max Values – If your dataset expands or varies over time, Z-score doesn’t require predefined min/max values—it adapts dynamically.
# ✅ Avoids Extreme Imbalances – If a feature (e.g., attack time) has unusually high variance, min-max scaling could make it behave unpredictably. Z-score ensures a more stable distribution.
