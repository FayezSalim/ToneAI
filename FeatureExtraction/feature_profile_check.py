import pandas as pd
import matplotlib.pyplot as plt

# Load dataset with clustered features
df_clusters = pd.read_csv("hierarchical_clustered_features_AgglomerativeClustering.csv") 

# Filter for Cluster 5
df_cluster5 = df_clusters[df_clusters["Cluster"] == 5]

# Select key tonal features to analyze (adjust based on dataset)
features_to_plot = ["spectral_centroid_mean", "spectral_flatness_mean", "harmonic_distortion_ratio_mean"] #, "attack_time"]

# Plot feature distributions
plt.figure(figsize=(12, 6))
for feature in features_to_plot:
    plt.hist(df_cluster5[feature], bins=15, alpha=0.7, label=feature)

plt.xlabel("Feature Value")
plt.ylabel("Frequency")
plt.title("Feature Distributions for Cluster 5")
plt.legend()
plt.show()