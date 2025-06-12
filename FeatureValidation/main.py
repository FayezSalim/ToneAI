
from clustering import cluster_features
from correlation_analysis import performCorrelationAnalysis

#peform correlation analysis
performCorrelationAnalysis(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    useFreshData=True
)

cluster_features(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    clusteringType="kmeans"
)

cluster_features(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    clusteringType="dbscan"
)

cluster_features(
    audioSourceDirectory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated",
    clusteringType="hierarchical"
)



