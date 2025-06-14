
import numpy as np        
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from scipy.stats import shapiro, kstest
from FeatureExtraction import prepare_features
from scipy.stats import skew, kurtosis


def extract_normalized_features(path:str,useFreshData:bool=True):

    features = prepare_features(path,useFreshData)

    aggregated_features = {}

    # Iterate through clips and collect feature values
    for clip_data in features.values():
        for feature_name, value in clip_data.items():
            aggregated_features.setdefault(feature_name, []).append(value)


    df = pd.DataFrame.from_dict(aggregated_features)

    # Iterate over features (columns)
    for feature_name in df.columns:
        feature_data = df[feature_name]  # Extract feature column
        
        # Perform Shapiro-Wilk Test
        shapiro_test = shapiro(feature_data)
        print(f"{feature_name} - Shapiro-Wilk: Statistic={shapiro_test.statistic:.4f}, p-value={shapiro_test.pvalue:.4f}")
        
        # Perform Kolmogorov-Smirnov Test
        ks_test = kstest(feature_data, 'norm')
        print(f"{feature_name} - KS Test: Statistic={ks_test.statistic:.4f}, p-value={ks_test.pvalue:.4f}")
        
        # Compute skewness and kurtosis
        feature_skewness = skew(feature_data)
        feature_kurtosis = kurtosis(feature_data, fisher=True)
        print(f"{feature_name} - Skewness: {feature_skewness:.4f}, Kurtosis: {feature_kurtosis:.4f}\n")

        # Plot histogram and KDE
        plt.figure(figsize=(6, 4))
        sns.histplot(feature_data, kde=True, bins=30, color='blue')
        plt.title(f"Feature Distribution: {feature_name}")
        plt.xlabel(feature_name)
        plt.ylabel("Frequency")
        plt.show()



   