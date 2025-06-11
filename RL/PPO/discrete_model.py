import gym
import numpy as np
import random
import torch
import torch.nn as nn
import torch.optim as optim
from stable_baselines3 import PPO
from stable_baselines3.common.envs import DummyVecEnv

# Define available models
amps = ["Fender Twin", "Mesa Boogie", "Marshall Plexi"]
cabs = ["4x12 Greenback", "2x12 Vintage"]
distortions = ["Tube Screamer", "Klon Centaur"]
signal_orders = [["amp", "cab", "distortion"], ["distortion", "cab", "amp"], ["cab", "amp", "distortion"]]

class HelixPresetEnv(gym.Env):
    def __init__(self):
        super(HelixPresetEnv, self).__init__()
        self.action_space = gym.spaces.MultiDiscrete([len(amps), len(cabs), len(distortions), len(signal_orders)])
        self.observation_space = gym.spaces.Discrete(1)  # Placeholder for state tracking

    def step(self, action):
        amp_choice = amps[action[0]]
        cab_choice = cabs[action[1]]
        distortion_choice = distortions[action[2]]
        order_choice = signal_orders[action[3]]

        # Placeholder reward function (to be refined later)
        reward = random.uniform(0, 1)  # Dummy reward for now

        return np.array([0]), reward, False, {}

    def reset(self):
        return np.array([0])

# Wrap environment for PPO
env = DummyVecEnv([lambda: HelixPresetEnv()])

# Initialize PPO Model
model = PPO("MlpPolicy", env, verbose=1)

# Train PPO agent
model.learn(total_timesteps=10000)

# Test trained model on sample selection
obs = env.reset()
action, _states = model.predict(obs)
print(f"Selected Config: {amps[action[0]]}, {cabs[action[1]]}, {distortions[action[2]]}, Order: {signal_orders[action[3]]}")