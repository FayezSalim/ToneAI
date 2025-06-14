
import sys
sys.path.insert(0, "../") 

# import sys
# sys.path.append(r"C:\\AI\\Apps\\Ton./FeatureAI")
                
from prepare import prepare_aggregated_feature_dataframe,prepare_features
from tonal_separation import visualize_PCA_2d,visualize_TSNE



path = "C:\\AI\\Apps\\ToneAI\\Songs\\Separated"

# for clip_name, clip_data, sampling_rate in enumerate_clips(audio_directory=path):
#     print(f"Clip Name: {clip_name}")
#     print(f"Sampling Rate: {sampling_rate}")
#     print("-" * 40)
#     break  # Remove this line to process all clips

# df_features= prepare_aggregated_feature_dataframe(path, False)

# visualize_PCA_2d(df_features)
# visualize_TSNE(df_features)


prepare_features(path,False)
