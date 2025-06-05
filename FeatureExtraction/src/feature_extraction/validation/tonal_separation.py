import pandas as pd
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

def visualize_PCA_2d(df_features:pd.DataFrame):
   return
    # df_features.drop(columns=["clip_name"], inplace=True)  # Drop non-numeric column for PCA/TSNE
    # # Apply PCA (reduce to 2 components for visualization)
    # pca = PCA(n_components=2)
    # pca_features = pca.fit_transform(df_features)

    # # Scatter plot of PCA components
    # plt.figure(figsize=(10, 6))
    # plt.scatter(pca_features[:, 0], pca_features[:, 1], alpha=0.7, cmap="coolwarm")
    # plt.xlabel("Principal Component 1")
    # plt.ylabel("Principal Component 2")
    # plt.title("PCA Visualization of Tone Clusters")
    # plt.show()

def visualize_TSNE(df_features:pd.DataFrame):

    clip_labels = df_features["clip_name"] 

    tsne = TSNE(n_components=2, perplexity=30, random_state=42)
    tsne_features = tsne.fit_transform(df_features.drop(columns=["clip_name"]))  # Exclude labels from transformation


    plt.figure(figsize=(12, 8))
    for i in range(len(tsne_features)):
        plt.scatter(tsne_features[i, 0], tsne_features[i, 1], alpha=0.7)
        plt.text(tsne_features[i, 0], tsne_features[i, 1], clip_labels[i], fontsize=8, alpha=0.6)


    # Scatter plot of t-SNE components
    plt.figure(figsize=(10, 6))
    plt.scatter(tsne_features[:, 0], tsne_features[:, 1], alpha=0.7, cmap="coolwarm")
    plt.xlabel("t-SNE Component 1")
    plt.ylabel("t-SNE Component 2")
    plt.title("t-SNE Visualization of Tone Clusters")
    plt.show()