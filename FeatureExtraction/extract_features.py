from typing import Any, Dict, Union
import librosa
import numpy as np
import numpy as np
from scipy.signal import find_peaks


def extract_features(clipData, sampling_rate) -> Dict[str, Union[np.floating,np.ndarray[Any,Any]]]:
    
    features = {}

    ### Spectral Features ###
    features["spectral_centroid"] = librosa.feature.spectral_centroid(y=clipData, sr=sampling_rate)
    features["spectral_bandwidth"] = librosa.feature.spectral_bandwidth(y=clipData, sr=sampling_rate)
    features["spectral_flatness"] = librosa.feature.spectral_flatness(y=clipData)
    features["spectral_contrast"] = librosa.feature.spectral_contrast(y=clipData, sr=sampling_rate)

    ### Envelope Features (Attack, Sustain, Decay) ###
    features["rms_energy"] = librosa.feature.rms(y=clipData)[0]
    onset_frames = librosa.onset.onset_detect(y=clipData, sr=sampling_rate)
    features["onset_frames"] = onset_frames
    features["onset_times"] = librosa.frames_to_time(onset_frames, sr=sampling_rate)

    features["spectral_flux"] = librosa.onset.onset_strength(y=clipData, sr=sampling_rate)
    features["attack_time"] = np.argmax(features["spectral_flux"]) / sampling_rate  # First strong peak gives attack estimate

    # Compute spectral bandwidth (variation in frequencies over time)
    spectral_bandwidth = librosa.feature.spectral_bandwidth(y=clipData, sr=sampling_rate)

    # Modulation depth estimate → Higher variance suggests strong modulation effects
    features["modulation_depth"] = spectral_bandwidth



    ### Spectral Roll-Off ###
    features["spectral_rolloff"] = librosa.feature.spectral_rolloff(y=clipData, sr=sampling_rate)[0]

    ### Peak Detection in RMS Energy ###
    peaks, _ = find_peaks(features["rms_energy"], height=np.percentile(features["rms_energy"], 40))
    features["peaks"] = peaks

    ### Harmonic vs. Distortion Features ###
    stft = librosa.stft(clipData)
    absoluteS = np.abs(librosa.stft(clipData)) * 100  # Scale spectrogram for better visibility
    absoluteS[absoluteS < 1e-5] = 1e-5  # Floor small values

    harmonic, percussive = librosa.decompose.hpss(absoluteS)
    features["harmonic"] = harmonic
    features["percussive"] = percussive
    features["harmonic_distortion_ratio"] = harmonic / (percussive + 1e-8)  # Element-wise ratio

    ### Zero Crossing & Crest Factor ###
    features["zero_crossing_rate"] = librosa.feature.zero_crossing_rate(y=clipData)
    features["crest_factor"] = np.max(np.nan_to_num(clipData)) / (np.mean(features["rms_energy"]) + 1e-8) # Element-wise ratio divide by zero handle ??

    ### MFCC & Chroma Features ###
    mfccs = librosa.feature.mfcc(y=clipData, sr=sampling_rate)
    features["mfccs0"] = mfccs[0]
    features["mfccs1"]= mfccs[1]
    features["chroma"] = librosa.feature.chroma_stft(y=clipData, sr=sampling_rate)

    ### Modulation & Reverb Analysis ###
    features["vibrato_depth"] = librosa.feature.delta(mfccs)
    S, _ = librosa.magphase(stft)
    features["reverb_tail_length"] = librosa.feature.spectral_rolloff(S=S, sr=sampling_rate)

    ### Dynamic Range ###
    features["dynamic_range"] = np.ptp(features["rms_energy"])
    #features["peak_to_rms_ratio"] = features["peaks"] / (features["rms_energy"] + 1e-8)  # Element-wise ratio  //required for model training? 

    # Compute autocorrelation to detect repeated echoes

    features["autocorr"] = librosa.autocorrelate(clipData)

    # Compute left and right channel energy
    left_channel_energy = np.sum(np.abs(clipData[0]))  # Sum of absolute values in left channel
    right_channel_energy = np.sum(np.abs(clipData[1]))  # Sum of absolute values in right channel

    # Stereo width estimate → Higher ratio suggests wider stereo effects
    stereo_width = np.abs(left_channel_energy - right_channel_energy) / (left_channel_energy + right_channel_energy + 1e-8) #avoid divide by zer0

    features["stereo_width"] = stereo_width

    features["peak_to_rms_ratio_mean"]= np.mean(np.max(features["peaks"]) / (np.mean(features["rms_energy"]) + 1e-8))

    return features


def extract_aggregated_features(cliponData,sampling_rate)  -> Dict[str,np.floating]:
    features = extract_features(clipData=clipData, sampling_rate=sampling_rate)
    return {
        "spectral_centroid_mean": np.mean(features["spectral_centroid"]),
        "spectral_bandwidth_mean": np.mean(features["spectral_bandwidth"]),
        "spectral_flatness_mean": np.mean(features["spectral_flatness"]),
        "spectral_contrast_mean": np.mean(features["spectral_contrast"]),
        "rms_energy_mean": np.mean(features["rms_energy"]),
        "rms_energy_max": np.max(features["rms_energy"]),
        "rms_energy_variance": np.var(features["rms_energy"]),
        "rms_energy_percentile": np.percentile(features["rms_energy"], 75),
        "onset_frames_mean": np.mean(features["onset_frames"]),
        "onset_times_mean": np.mean(features["onset_times"]),
        "attack_time_mean": np.mean(features["attack_time"]),
        "modulation_depth_mean": np.mean(features["modulation_depth"]),  # Using spectral bandwidth as a proxy for modulation depth
        "spectral_rolloff_mean": np.mean(features["spectral_rolloff"]), #  high correlation with spectral_centroid 0.95 but needed to Approximate decay length so keeping it
        # "spectral_rolloff_max": np.max(features["spectral_rolloff"]),
        # "spectral_rolloff_percentile": np.percentile(features["spectral_rolloff"], 75),
        "harmonic_mean": np.mean(features["harmonic"]),
        "delay_presence": np.max(features["autocorr"]),  # Delay presence estimate → High autocorrelation suggests repeating echoes
        "spectral_flux_mean": np.mean(features["spectral_flux"]),
        # "percussive_mean": np.mean(features["percussive"]),   ratio is enough     
        "harmonic_distortion_ratio_mean": np.mean(features["harmonic_distortion_ratio"]),
        "zero_crossing_rate_mean": np.mean(features["zero_crossing_rate"]),
        # "crest_factor_mean": np.mean(features["crest_factor"]), Spectral Flatness measurres tonalcomplexity correlation0.93
        #"mfcc1_mean": np.mean(features["mfccs"][0]), high corellation with rms_energy 0.85
        "stereo_width": features["stereo_width"],  # Stereo width estimate
        "mfcc2_mean": np.mean(features["mfccs1"]),
        "chroma_mean": np.mean(features["chroma"]),
        "vibrato_depth": np.var(features["vibrato_depth"]),
        "reverb_tail_length_mean": np.mean(features["reverb_tail_length"]),
        "dynamic_range": features["dynamic_range"],
        "peak_to_rms_ratio_mean": features["peak_to_rms_ratio_mean"]
    }



selected_feature_keys = ["spectral_centroid","spectral_bandwidth","spectral_flatness","spectral_contrast","rms_energy","onset_frames", 
                "onset_times","attack_time","modulation_depth","spectral_rolloff","spectral_flux",
                  "harmonic","percussive","autocorr","harmonic_distortion_ratio","zero_crossing_rate","stereo_width","mfccs1",
                    "chroma", "vibrato_depth","reverb_tail_length","dynamic_range","peak_to_rms_ratio_mean" ]



# - Distortion & Saturation → Captured via harmonic_distortion_ratio_mean.
# - Modulation & Spatial Effects → modulation_depth_mean, reverb_tail_length_mean, and delay_presence ensure tone depth is captured.
# - Amp & Speaker Dynamics → spectral_centroid_mean, spectral_bandwidth_mean, and rms_energy_mean provide insight into tonal brightness and power.
# - Compression & Articulation → attack_time_mean and peak_to_rms_ratio_mean help differentiate compressed vs. dynamic tones.
# - Tonality & EQ Shape → spectral_contrast_mean, chroma_mean, and mfcc2_mean contribute to harmonic balance.

# Recommended Representations
# | Feature | Suggested Representation | Reasoning | 
# | Spectral Centroid | Mean | Captures overall brightness of the signal. | 
# | Spectral Bandwidth | Mean & Std | Helps model understand spread of frequencies. | 
# | Spectral Flatness | Mean | Represents tonal vs. noise-like characteristics. | 
# | Spectral Contrast | Full ndarray | Preserves dynamic changes in contrast across time. | 
# | RMS Energy | Mean & Std | Captures loudness variations. | 
# | Onset Frames | Count | Number of detected onsets is more useful than raw values. | 
# | Onset Times | Full ndarray | Preserves timing of transients. | 
# | Attack Time | Mean | Represents how quickly a sound reaches peak amplitude. | 
# | Modulation Depth | Mean & Std | Captures depth of amplitude modulation. | 
# | Spectral Rolloff | Mean | Represents frequency cutoff point. | 
# | Spectral Flux | Mean & Std | Measures spectral change over time. | 
# | Harmonic | Mean | Represents harmonic content. | 
# | Percussive | Mean | Represents percussive energy. | 
# | Autocorr | Full ndarray | Preserves periodicity information. | 
# | Harmonic Distortion Ratio | Mean | Captures distortion characteristics. | 
# | Zero Crossing Rate | Mean & Std | Useful for detecting noisiness. | 
# | Stereo Width | Mean | Represents spatial characteristics. | 
# | MFCCs | Full ndarray | Essential for timbre analysis. | 
# | Chroma | Full ndarray | Preserves harmonic structure. | 
# | Vibrato Depth | Mean | Represents vibrato intensity. | 
# | Reverb Tail Length | Mean | Captures decay characteristics. | 
# | Dynamic Range | Mean & Std | Represents loudness variation. | 
# | Peak-to-RMS Ratio | Mean | Captures transient sharpness. | 



