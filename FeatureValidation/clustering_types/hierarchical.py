from pandas import DataFrame
from scipy.cluster.hierarchy import linkage, dendrogram
import matplotlib.pyplot as plt
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import fcluster



def hierarchical_clustering(df_features:DataFrame,df_normalized:DataFrame):
    """
    Perform hierarchical clustering on the normalized feature DataFrame.
    
    Parameters:
    df_normalized (DataFrame): Normalized feature DataFrame.
    
    Returns:
    None: Displays a dendrogram of the hierarchical clustering.
    """
    # Create a linkage matrix using Ward's method
    linked = linkage(df_normalized, method="ward")
    #dendrogram(linked)

    n_clusters = 30  # Adjust this based on dendrogram observations
    clustering = AgglomerativeClustering(n_clusters=n_clusters, linkage="ward")
    cluster_labels = clustering.fit_predict(df_normalized)
   

    df_features["Cluster"] = cluster_labels

    df_features.to_csv(f"experiment_results/hierarchical_clustered_features_AgglomerativeClustering.csv", index=False)

    # Plot dendrogram
    plt.figure(figsize=(48, 32))
    dendrogram(linked, leaf_rotation=90, leaf_font_size=10)
    plt.title("Hierarchical Clustering Dendrogram ")
    plt.xlabel("Songs")
    plt.ylabel("Distance")
    plt.savefig(f"experiment_results/hierarchical_clustering_AgglomerativeClustering.png", dpi=300, bbox_inches="tight")    
    #plt.show()

    #-------------------fcluster
    #cut_points = [5.2]  # Adjust these based on dendrogram observations
    # for threshold in cut_points:
    #     cluster_labels = fcluster(linked, threshold, criterion="distance")
    #     unique_clusters = len(set(cluster_labels))
    
    #     print(f"Distance Threshold: {threshold} → Number of Clusters: {unique_clusters}")


    #     df_features["Cluster"] = cluster_labels

    #     df_features.to_csv(f"hierarchical_clustered_features_{threshold}.csv",columns=['0','Cluster'], index=False)

    #     # Plot dendrogram
    #     plt.figure(figsize=(48, 32))
    #     dendrogram(linked, leaf_rotation=90, leaf_font_size=10)
    #     plt.title("Hierarchical Clustering Dendrogram Threshold: " + str(threshold))
    #     plt.xlabel("Songs")
    #     plt.ylabel("Distance")
    #     plt.savefig(f"hierarchical_clustering_{threshold}.png", dpi=300, bbox_inches="tight")    
        #plt.show()


# ✅ Builds a tree-like grouping, showing how clips relate to each other
# ✅ Doesn't require predefined cluster numbers
# ✅ Can help analyze which tracks progressively merge into tone families
# ❌ Computationally heavier than K-Means for larger datasets
# 🔍 Why It Matters for Your Project:
# - If you want to visualize which tracks are closely related over different layers
# - Great for structuring similar presets, helping define tone evolution

