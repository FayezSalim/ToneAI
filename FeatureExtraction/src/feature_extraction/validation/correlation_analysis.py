import os
import pandas as pd
import seaborn as sns
import numpy as np
import librosa
import glob
from scipy.signal import find_peaks
import matplotlib.pyplot as plt
import seaborn as sns
import tqdm
from feature_extraction.enumerate_clips import enumerate_clips, selectRandomClips
from feature_extraction.extract_features import extract_aggregated_features


def ol_PerformCorrelationAnalysis(audioSourceDirectory:str):
    # Define the directory containing your guitar samples
    
    audio_files = glob.glob(os.path.join(audioSourceDirectory, "*.mp3"))

    # Initialize feature storage
    feature_list = []

    clip_names =[]

    # Process each file in the dataset
    for _,file in enumerate(tqdm.tqdm(audio_files)):

        for clipData,sampling_rate in selectRandomClips(file):  

            clip_names.append(os.path.basename(file)+ f"_{_+1}")

            ### Spectral Features (Capturing Tone Quality) ###
            spectral_centroid =  np.mean(librosa.feature.spectral_centroid(y=clipData, sr=sampling_rate))
            spectral_bandwidth =  np.mean(librosa.feature.spectral_bandwidth(y=clipData, sr=sampling_rate))
            spectral_flatness =  np.mean(librosa.feature.spectral_flatness(y=clipData))
            spectral_contrast =  np.mean(librosa.feature.spectral_contrast(y=clipData, sr=sampling_rate))

            ### Envelope Features (Attack, Sustain, Decay) ###
            rms_energy = librosa.feature.rms(y=clipData)[0]
            of=librosa.onset.onset_detect(y=clipData, sr=sampling_rate)
            onset_frames =  np.mean(of.size)
            onset_times = np.mean(librosa.frames_to_time(of, sr=sampling_rate))

            spectral_rolloff = librosa.feature.spectral_rolloff(y=clipData, sr=sampling_rate)[0]
            mean_rolloff = np.mean(spectral_rolloff)  # Overall treble presence
            max_rolloff = np.max(spectral_rolloff)  # Maximum brightness
            percentile_rolloff = np.percentile(spectral_rolloff, 75)  # Dynamic high-end measure

            # print("RMS Energy Value:", rms_energy)
            # print("Contains NaN:", np.isnan(rms_energy))

            # test_rms = np.array([0.1, 0.3, 0.5, 0.2, 0.7, 1.0, 0.6, 0.2, 0.05])
            # peaksTest, _ = find_peaks(test_rms, prominence=np.percentile(test_rms, 75))
            # print("Test Peaks:", peaksTest)

            

            # Find peaks in RMS energy for attack & decay
            #peaks, _ = find_peaks(rms_energy.flatten(), prominence=np.percentile(rms_energy.flatten(), 75))
            #rms_smoothed = np.convolve(rms_energy, np.ones(5)/5, mode='valid')

            #peaks, _ = find_peaks(rms_energy, prominence=np.percentile(rms_energy, 10))

            peaks, _ = find_peaks(rms_energy, height=np.percentile(rms_energy, 40))
            # print("Peaks:", peaks)

            # plt.plot(rms_energy, label="RMS Energy", color="r")
            # plt.scatter(peaks, rms_energy[peaks], color="b", label="Peaks")
            # plt.title("RMS Energy & Peaks")

            # plt.xlabel("Frame Index")
            # plt.ylabel("Amplitude")
            # plt.legend()
            # plt.show()

            
            ### Harmonic vs. Distortion Features ###
            stft = librosa.stft(clipData)
            absoluteS = np.abs(librosa.stft(clipData))  # Use absolute spectrogram
            absoluteS = absoluteS * 100 # Scale the spectrogram for better visibility
            absoluteS[absoluteS < 1e-5] = 1e-5  # Ensure values aren't too small

            harmonic, percussive = librosa.decompose.hpss(absoluteS)
            harmonic_distortion_ratio = np.mean(harmonic) / (np.mean(percussive) + 1e-8)


            # print("Spectrogram Min:", np.min(absoluteS))
            # print("Spectrogram Max:", np.max(absoluteS))
            # print("Contains NaN:", np.isnan(absoluteS).any())
            # print(f"harmonic shape: {harmonic.shape}, percussive shape: {percussive.shape}")
            # print("Harmonic Min:", np.min(harmonic))
            # print("Percussive Min:", np.min(percussive))
            # print("Contains NaN in Harmonic:", np.isnan(harmonic).any())
            # print("Contains NaN in Percussive:", np.isnan(percussive).any())

            # plt.plot(harmonic.mean(axis=1), label="Harmonic Energy", color="r")
            # plt.plot(percussive.mean(axis=1), label="Percussive Energy", color="b")
            # plt.legend()
            # plt.title("Harmonic vs. Percussive Components")
            # plt.show()


            #harmonic, percussive = librosa.decompose.hpss(np.abs(stft))  # Separates harmonic from percussive elements
            zcr = np.mean(librosa.feature.zero_crossing_rate(y=clipData))   # High ZCR suggests distortion
            crest_factor = np.max(np.nan_to_num(clipData)) / np.mean(rms_energy)  # Measures signal compression

            #crest_factor = np.max(clipData) / np.mean(rms_energy)  # Measures signal compression

            ### EQ Profiling (Tonal Balance) ###            
            mfccs = librosa.feature.mfcc(y=clipData, sr=sampling_rate)
            mfcc1  = np.mean(mfccs[0])  # Captures tonal characteristics
            mfcc2 = np.mean(mfccs[1])
            chroma = np.mean(librosa.feature.chroma_stft(y=clipData, sr=sampling_rate))  # Helps identify harmonic content
                                            
            ### Modulation & Effects Analysis ###
            #vibrato_depth =  np.var(librosa.feature.delta(clipData)),
            vibrato_depth = np.var(librosa.feature.delta(mfccs))

            #reverb_tail_length =  np.mean(librosa.feature.spectral_rolloff(y=clipData, sr=sampling_rate)),
            S, _ = librosa.magphase(stft)
            reverb_tail_length = np.mean(librosa.feature.spectral_rolloff(S=S, sr=sampling_rate))
             
             
            ### Dynamic Range (Compression & Gain) ###
            dynamic_range = np.ptp(np.nan_to_num(rms_energy)) 
            #dynamic_range = np.ptp(rms_energy)  # Measures peak-to-lowest energy variations
            #peak_rms_ratio = np.max(rms_energy) / np.mean(rms_energy)  # Detects compression level
            #peak_to_rms_ratio= np.max(rms_energy) / np.mean(librosa.feature.rms(y=clipData))
            peak_to_rms_ratio = np.max(peaks) / (np.mean(rms_energy) + 1e-8)

            
            # Extract features dynamically
            features = {
                 ### 🔹 Spectral Features (Capturing Tone Quality) ###
                "Spectral Centroid": spectral_centroid,
                "Spectral Bandwidth": spectral_bandwidth,
                "Spectral Flatness": spectral_flatness,
                "Spectral Contrast": spectral_contrast,

                ### 🔹 Envelope Features (Attack, Sustain, Decay) ###
                "RMS Energy": np.mean(rms_energy),
                "RMS Energy Variance": np.var(rms_energy),
                "RMS Energy Max": np.max(rms_energy),
                "RMS Energy Percentile": np.percentile(rms_energy, 75),
                "Onset Frames": onset_frames,
                "Onset Times":onset_times,

                # Find peaks in RMS energy for attack & decay
                "Peaks": np.mean(peaks),
                "MaxPeaks": np.max(peaks),
                "PeakVariance": np.var(peaks),
                "PeakPercentile": np.percentile(peaks, 75),

                 ### Harmonic vs. Distortion Features ###
                "Harmonic": np.mean(harmonic),
                "Percussive": np.mean(percussive),
                "Zero Crossing Rate": zcr,
                "Crest Factor": crest_factor,

                ### EQ Profiling (Tonal Balance) ###
                "MFCC1": mfcc1,
                "MFCC2": mfcc2,
                "Chroma": chroma,

                "Harmonic Distortion Ratio": harmonic_distortion_ratio,  # Measures harmonic vs. percussive energy
                
                ##Dynamic EQ Shaping
                "Mean Rolloff": mean_rolloff,
                "Max Rolloff": max_rolloff, 
                "Percentile Rolloff": percentile_rolloff,

                ### Modulation & Effects Analysis ###
                "vibrato_depth": vibrato_depth,
                "Reverb Tail Length": reverb_tail_length,

                ### Dynamic Range (Compression & Gain) ###
                "Dynamic Range": dynamic_range,
                #"Peak RMS Ratio": peak_rms_ratio,
                "peak_to_rms_ratio": peak_to_rms_ratio
            }

            feature_list.append(features)

    # Convert feature list to DataFrame
    df = pd.DataFrame(feature_list)
    df = df.apply(pd.to_numeric, errors='coerce')  # Converts non-numeric values to NaN
    nan_columns = df.columns[df.isna().any()].tolist()
    print("Columns with NaN values:", nan_columns)
    

    # Compute correlation matrix across the dataset
    corr_matrix = df.corr()
    df.corr().to_csv("correlation_matrix.csv", index=True)

    # Visualize correlation matrix
    sns.set_theme(font_scale=1.2)
    plt.figure(figsize=(50, 50))

    sns.heatmap(corr_matrix, annot=True, cmap="coolwarm", fmt=".2f", linewidths=0.5)


    plt.savefig("correlation_heatmap.png", dpi=300, bbox_inches="tight")
    plt.close()  # Closes the plot to avoid redundant rendering

    harmonic_means = [feature["Harmonic"] for feature in feature_list]
    percussive_means = [feature["Percussive"] for feature in feature_list]
    harmonic_to_percussive_ratios = [
        feature["Harmonic"] / feature["Percussive"] if feature["Percussive"] != 0 else 0
        for feature in feature_list
    ]

    # Plot results
    plt.figure(figsize=(10, 6))
    sns.lineplot(x=clip_names, y=harmonic_means, marker="o", label="Harmonic Energy", color="r")
    sns.lineplot(x=clip_names, y=percussive_means, marker="s", label="Percussive Energy", color="b")
    sns.lineplot(x=clip_names, y=harmonic_to_percussive_ratios, marker="^", label="Harmonic/Percussive Ratio", color="g")

    # Formatting
    plt.title("Harmonic vs. Percussive Analysis Across Multiple Audio Clips")
    plt.xlabel("Audio Clips")
    plt.ylabel("Feature Values")
    plt.legend()
    plt.xticks(rotation=45)  # Rotate labels if filenames are long

    # Save as PNG
    plt.savefig("harmonic_percussive_analysis.png", dpi=300, bbox_inches="tight")
    plt.close()  # Close plot to prevent redundant rendering


def performCorrelationAnalysis(audioSourceDirectory:str):
    
    feature_list=[]
    clip_names=[]

    # Process each file in the dataset
    for clip_name,clip_data,sampling_rate in enumerate_clips(audioSourceDirectory):
        clip_names.append(clip_name)
        features = extract_aggregated_features(clip_data, sampling_rate)
        feature_list.append(features)
            
    print(f"clip_names: {len(clip_names)}")
    print(f"feature_list: {len(feature_list)}")
    # Convert feature list to DataFrame
    df = pd.DataFrame(feature_list)
    df = df.apply(pd.to_numeric, errors='coerce')  # Converts non-numeric values to NaN
    nan_columns = df.columns[df.isna().any()].tolist()
    print("Columns with NaN values:", nan_columns)
    

    # Compute correlation matrix across the dataset
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
