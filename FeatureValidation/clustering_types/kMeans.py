from matplotlib import pyplot as plt
from pandas import DataFrame
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from mpl_toolkits.mplot3d import Axes3D

def kmeans_clustering(df_features:DataFrame,df_normalized:DataFrame):
    """
    Perform K-Means clustering on the normalized feature DataFrame.
    
    Parameters:
    df_normalized (DataFrame): Normalized feature DataFrame.
    
    Returns:
    labels (array): Cluster labels for each track.
    """
    
    # Initialize K-Means with a specified number of clusters
    num_clusters = 25  # Start with 10 clusters
    kmeans = KMeans(n_clusters=num_clusters, random_state=42)
    df_features["Cluster"] = kmeans.fit_predict(df_normalized)


    # Apply PCA for 3D visualization
    pca = PCA(n_components=3)
    pca_results = pca.fit_transform(df_normalized)

    # Create 3D scatter plot
    fig = plt.figure(figsize=(50, 40))
    ax = fig.add_subplot(111, projection="3d")  # type: ignore
    
    ax: Axes3D = ax 

    sc = ax.scatter(pca_results[:, 0], pca_results[:, 1], pca_results[:, 2], c=df_features["Cluster"], cmap="viridis", alpha=0.8) # type: ignore


    # Annotate each data point with clip name (shortened for readability)
    for i, txt in enumerate(df_features.iloc[:,0]):
        ax.text(pca_results[i, 0], pca_results[i, 1], pca_results[i, 2], txt[:8], fontsize=7, color="black")

    # Formatting
    ax.set_xlabel("PCA Dimension 1")
    ax.set_ylabel("PCA Dimension 2")
    ax.set_zlabel("PCA Dimension 3")
    ax.set_title("3D K-Means Clustering via PCA")
    plt.colorbar(sc, label="Cluster Label")

    # Save the visualization
    plt.savefig("experiment_results/kmeans_3d_clustering_with_labels.png", dpi=300, bbox_inches="tight")
    plt.show()

    print("3D Clustering visualization saved as 'kmeans_3d_clustering_with_labels.png'!")



# 1️⃣ K-Means Clustering (Most Common)
# ✅ Works best for well-separated clusters
# ✅ Fast & scalable for large datasets like your 300 clips
# ✅ Uses centroid-based grouping, meaning each clip is assigned to the closest "center"
# ❌ Assumes clusters are spherical & equally sized, which might not always be true for music tones
# 🔍 Why It Matters for Your Project:
# - Useful if tone families are clearly defined (e.g., distorted, clean, reverb-heavy)
# - Best for identifying broad tone categories rather than fine-tuned similaritie

