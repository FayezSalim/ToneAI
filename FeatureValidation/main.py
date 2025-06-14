
# from clustering import cluster_features
# from correlation_analysis import performCorrelationAnalysis
from normalization import extract_normalized_features

path = "C:\\AI\\Apps\\ToneAI\\Songs\\Separated"
#peform correlation analysis
# performCorrelationAnalysis(
#     audioSourceDirectory=path,
#     useFreshData=True
# )

# cluster_features(
#     audioSourceDirectory=path,
#     clusteringType="kmeans"
# )

# cluster_features(
#     audioSourceDirectory=path,
#     clusteringType="dbscan"
# )

# cluster_features(
#     audioSourceDirectory=path,
#     clusteringType="hierarchical"
# )


extract_normalized_features(path,False)

