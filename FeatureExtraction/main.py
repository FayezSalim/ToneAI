
from prepare import prepare_aggregated_feature_dataframe
from tonal_separation import visualize_PCA_2d,visualize_TSNE


# for clip_name, clip_data, sampling_rate in enumerate_clips(audio_directory="C:\\AI\\Apps\\ToneAI\\Songs\\Separated"):
#     print(f"Clip Name: {clip_name}")
#     print(f"Sampling Rate: {sampling_rate}")
#     print("-" * 40)
#     break  # Remove this line to process all clips

df_features= prepare_aggregated_feature_dataframe("C:\\AI\\Apps\\ToneAI\\Songs\\Separated", False)

visualize_PCA_2d(df_features)
visualize_TSNE(df_features)
