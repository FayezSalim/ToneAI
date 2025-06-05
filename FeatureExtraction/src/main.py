
from feature_extraction.enumerate_clips import enumerate_clips
from feature_extraction.prepare_feature_dataframe import prepare_aggregated_feature_dataframe
from feature_extraction.validation.clustering import cluster_features
from feature_extraction.validation.correlation_analysis import performCorrelationAnalysis
from feature_extraction.validation.tonal_separation import visualize_PCA_2d, visualize_TSNE

# extract features and peform correlation analysis
# performCorrelationAnalysis(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
#     useFreshData=True
# )

# cluster_features(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
#     clusteringType="kmeans"
# )

cluster_features(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    clusteringType="dbscan"
)

# cluster_features(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
#     clusteringType="hierarchical"
# )

# for clip_name, clip_data, sampling_rate in enumerate_clips(audio_directory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated"):
#     print(f"Clip Name: {clip_name}")
#     print(f"Sampling Rate: {sampling_rate}")
#     print("-" * 40)
#     break  # Remove this line to process all clips

# df_features= prepare_aggregated_feature_dataframe("C:\\AI\\Apps\\ToneAI\\Songs\\Separated", False)
# visualize_PCA_2d(df_features)
# visualize_TSNE(df_features)
