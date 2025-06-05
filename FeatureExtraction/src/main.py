
from feature_extraction.validation.clustering import cluster_features
from feature_extraction.validation.correlation_analysis import performCorrelationAnalysis

# extract features and peform correlation analysis
# performCorrelationAnalysis(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated"
# )

# cluster_features(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
#     clusteringType="kmeans"
# )

# cluster_features(
#     audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
#     clusteringType="dbscan"
# )

cluster_features(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    clusteringType="hierarchical"
)