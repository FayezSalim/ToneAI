
import seaborn as sns
import matplotlib.pyplot as plt
import seaborn as sns
from feature_extraction.prepare_feature_dataframe import prepare_aggregated_feature_dataframe


def performCorrelationAnalysis(audioSourceDirectory:str,useFreshData:bool=False):
    
    df =prepare_aggregated_feature_dataframe(audioSourceDirectory,useFreshData)
    # Compute correlation matrix across the dataset
    df.drop(columns=["clip_name"], inplace=True)  # Drop non-numeric column for correlation analysis
    corr_matrix = df.corr()
    df.corr().to_csv("correlation_matrix.csv", index=True)

    # Visualize correlation matrix
    sns.set_theme(font_scale=1.2)
    plt.figure(figsize=(50, 50))

    sns.heatmap(corr_matrix, annot=True, cmap="coolwarm", fmt=".2f", linewidths=0.5)


    plt.savefig("correlation_heatmap.png", dpi=300, bbox_inches="tight")
    plt.close()  # Closes the plot to avoid redundant rendering

    # harmonic_means = [feature["harmonic_mean"] for feature in feature_list]
    # percussive_means = [feature["percussive_mean"] for feature in feature_list]
    # harmonic_to_percussive_ratios = [
    #     feature["harmonic_mean"] / feature["percussive_mean"] if feature["percussive_mean"] != 0 else 0
    #     for feature in feature_list
    # ]

    # Plot results
    # plt.figure(figsize=(10, 6))
    # sns.lineplot(x=clip_names, y=harmonic_means, marker="o", label="Harmonic Energy", color="r")
    # sns.lineplot(x=clip_names, y=percussive_means, marker="s", label="Percussive Energy", color="b")
    # sns.lineplot(x=clip_names, y=harmonic_to_percussive_ratios, marker="^", label="Harmonic/Percussive Ratio", color="g")

    # Formatting
    # plt.title("Harmonic vs. Percussive Analysis Across Multiple Audio Clips")
    # plt.xlabel("Audio Clips")
    # plt.ylabel("Feature Values")
    # plt.legend()
    # plt.xticks(rotation=45)  # Rotate labels if filenames are long

    # # Save as PNG
    # plt.savefig("harmonic_percussive_analysis.png", dpi=300, bbox_inches="tight")
    # plt.close()  # Close plot to prevent redundant rendering


#####################################################
# Potential Features to Remove (Less Impact on Tone Matching)
#- Zero Crossing Rate → More relevant for texture/noise analysis than direct tone replication.
#- Spectral Flatness & Contrast → Useful for sound categorization but may not directly impact preset selection.
#- Onset Frames & Times → While helpful for rhythm analysis, these may be secondary for tone replication.
