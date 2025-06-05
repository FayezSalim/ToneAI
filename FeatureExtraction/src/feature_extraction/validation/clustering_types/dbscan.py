
from matplotlib import pyplot as plt
import numpy as np
from pandas import DataFrame
from sklearn.cluster import DBSCAN
from sklearn.decomposition import PCA

def dbscan_clustering(df_features:DataFrame,df_normalized:DataFrame):
    """
    Perform DBSCAN clustering on the normalized feature DataFrame.
    
    Parameters:
    df_normalized (DataFrame): Normalized feature DataFrame.
    
    Returns:
    labels (array): Cluster labels for each track.
    """
    # # Apply PCA for 3D visualization
    pca = PCA(n_components=3)
    pca_results = pca.fit_transform(df_normalized)

    # Apply DBSCAN clustering (adjust parameters based on data distribution)
    dbscan = DBSCAN(eps=0.45, min_samples=2)  # 'eps' defines cluster density sensitivity
    df_features["Cluster"] = dbscan.fit_predict(df_normalized)

    # Create 3D scatter plot
    fig = plt.figure(figsize=(48, 32))
    ax = fig.add_subplot(111, projection="3d")

    # Scatter plot for DBSCAN clusters (handling noise points)
    unique_clusters = set(df_features["Cluster"])
    colors = plt.cm.viridis(np.linspace(0, 1, len(unique_clusters))) # type: ignore

    for cluster_id, color in zip(unique_clusters, colors):
        cluster_mask = df_features["Cluster"] == cluster_id
        ax.scatter(pca_results[cluster_mask, 0], pca_results[cluster_mask, 1], pca_results[cluster_mask, 2], 
               c=[color], label=f"Cluster {cluster_id}" if cluster_id != -1 else "Noise", alpha=0.8)

    # Annotate each data point with clip name (shortened for readability)
    for i, txt in enumerate(df_features.iloc[:, 0]):
        ax.text(pca_results[i, 0], pca_results[i, 1], pca_results[i, 2], txt[:8], fontsize=7, color="black") # type: ignore

    # Formatting
    ax.set_xlabel("PCA Dimension 1")
    ax.set_ylabel("PCA Dimension 2")
    ax.set_zlabel("PCA Dimension 3") # type: ignore
    ax.set_title("3D DBSCAN Clustering via PCA")
    plt.legend()
    plt.savefig("dbscan_3d_clustering.png", dpi=300, bbox_inches="tight")
    

    df_features.to_csv("dbscan_features.csv",columns=['clip_name','Cluster'], index=False)  # Save features with cluster labels for debugging
    
    # Count noise points (-1 cluster)
    num_noise_points = (df_features["Cluster"] == -1).sum()
    total_points = len(df_features)

    # Calculate percentage of noise points
    noise_percentage = (num_noise_points / total_points) * 100

    print(f"Total data points: {total_points}")
    print(f"Noise points: {num_noise_points}")
    print(f"Percentage of points classified as noise: {noise_percentage:.2f}%")


    plt.show()

    # print("3D DBSCAN clustering visualization saved as 'dbscan_3d_clustering.png'!")
    # Experiment with different DBSCAN parameters
    # eps_values = [0.3, 0.5, 0.8, 1.0]  # Increasing neighborhood radius
    # min_samples_values = [3, 5, 10]  # Varying minimum cluster size

    # as  eps 1 and min3 gave 4 clusters we are trying to ptimize further

    # eps_values = [1.3,1.4]  # Slight adjustments
    # min_samples_values = [3,4, 5, 6]  # Increasing density requirement

    # for eps in eps_values:
    #     for min_samples in min_samples_values:
    #         # # Apply PCA for 3D visualization
    #         pca = PCA(n_components=3)
    #         pca_results = pca.fit_transform(df_normalized)
            
    #         dbscan = DBSCAN(eps=eps, min_samples=min_samples)
    #         cluster_labels = dbscan.fit_predict(df_normalized)

    #         # Count unique clusters found
    #         num_clusters = len(set(cluster_labels)) - (1 if -1 in cluster_labels else 0)
    #         print(f"DBSCAN with eps={eps}, min_samples={min_samples} → Found {num_clusters} clusters")

    #         # Plot results if clusters exist
    #         fig = plt.figure(figsize=(10, 7))
    #         ax = fig.add_subplot(111, projection="3d")

    #         unique_clusters = set(cluster_labels)
    #         colors = plt.cm.viridis(np.linspace(0, 1, len(unique_clusters))) # type: ignore

    #         for cluster_id, color in zip(unique_clusters, colors):
    #             cluster_mask = cluster_labels == cluster_id
    #             ax.scatter(pca_results[cluster_mask, 0], pca_results[cluster_mask, 1], pca_results[cluster_mask, 2],  # type: ignore
    #                     c=[color], label=f"Cluster {cluster_id}" if cluster_id != -1 else "Noise", alpha=0.7)

    #         # Annotate clips
    #         for i, txt in enumerate(df_features.iloc[:, 0]):
    #             ax.text(pca_results[i, 0], pca_results[i, 1], pca_results[i, 2], txt[:8], fontsize=7, color="black") # type: ignore

    #         # Formatting
    #         ax.set_xlabel("PCA Dimension 1")
    #         ax.set_ylabel("PCA Dimension 2")
    #         ax.set_zlabel("PCA Dimension 3") # type: ignore
    #         ax.set_title(f"DBSCAN Clustering (eps={eps}, min_samples={min_samples})")
    #         plt.legend()
    #         plt.savefig(f"dbscan/dbscan_eps{eps}_min{min_samples}.png", dpi=300, bbox_inches="tight")
            #plt.show()




# ✅ Finds organic clusters of varying shapes & sizes
# ✅ Works well for natural groupings (e.g., genres, production styles)
# ✅ Doesn't require a fixed number of clusters—it identifies them dynamically
# ❌ May struggle with imbalanced datasets where some tracks have few samples
# 🔍 Why It Matters for Your Project:
# - If similar tracks should group without predefined labels, DBSCAN is ideal
# - Great for detecting organic tone groupings, where some songs might be highly similar while others are outliers
