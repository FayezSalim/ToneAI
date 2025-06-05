
import glob
import os
import random
import librosa
from matplotlib import pyplot as plt
import numpy as np
import tqdm
from pyloudnorm import Meter


def enumerate_clips(audio_directory):
    """
    Enumerate audio clips in the specified directory.

    Parameters:
    audio_directory (str): Path to the directory containing audio clips.

    Returns:
    clip_name (str): Name of the audio clip.
    clip_data (ndarray): Audio data of the clip.
    sampling_rate (int): Sampling rate of the audio clip.
    """

    print(f"Enumerating clips in directory: {audio_directory}")

    # Ensure the directory exists
    if not os.path.exists(audio_directory):
        raise FileNotFoundError(f"The directory {audio_directory} does not exist.")
    
    audio_files = glob.glob(os.path.join(audio_directory, "*.mp3"))

    # Process each file in the dataset
    for _,file in enumerate(tqdm.tqdm(audio_files)):
        sub_clip=0
        for clipData,sampling_rate in selectRandomClips(file):  
            sub_clip+=1
            yield os.path.basename(file)+ f"_{sub_clip}", clipData, sampling_rate
            
        



def selectRandomClips(file_path:str, num_clips=6, clip_duration=15):
    # Load audio to get total duration
    #stereo tracks might introduce unnecessary spatial variation, affecting spectral features like centroid and contrast.
    #Solution: Convert all files to mono, since guitar tones typically don’t require stereo differences for clustering

    file_data, sr = librosa.load(file_path, sr=44100,mono=True)

    file_data = preprocess_audio(file_data,sr)

    audio_duration = librosa.get_duration(y=file_data, sr=sr)

    # Ensure enough room for selection
    if num_clips * clip_duration > audio_duration:
        print(f" Not enough audio length to select non-overlapping clips. {file_path}")
        return

     # Initialize hash set of possible start times
    possible_starts = set(range(0, int(audio_duration) - clip_duration))

    selected_starts:list[int] = []

    for _ in range(num_clips):
        # Randomly select a start time from available options
        start_time = random.choice(list(possible_starts))

        # Store the selected time
        selected_starts.append(start_time)

        # Remove the 15s range from the hash set to prevent overlap
        for t in range(start_time, start_time + clip_duration):
            possible_starts.discard(t)

    #selected_starts.sort()  # Sort for better visualization
    #return y,selected_starts
    for start_time in selected_starts:
            clip_end = start_time + clip_duration
            clip = file_data[int(start_time * sr): int(clip_end * sr)]
            yield clip,sr


def preprocess_audio(file_data,sampling_rate):
    """
    Preprocess audio file by removing silence and normalizing volume.

    Parameters:
    file_path (str): Path to the audio file.
    clip_duration (int): Duration of each clip in seconds.

    Returns:
    list: List of preprocessed audio clips.
    """

        #preprocessing

    #import scipy.signal

    # Apply high-pass filter to remove unwanted low frequencies
    #b, a = scipy.signal.butter(4, 100, btype='high', fs=44100)  # 100 Hz cutoff
    #y_filtered = scipy.signal.filtfilt(b, a, y)

    #import noisereduce as nr

    # Reduce background noise
    #y_denoised = nr.reduce_noise(y=y, sr=sr)

    # Compute RMS energy to detect silent sections
    rms_energy = librosa.feature.rms(y=file_data)[0]

    # Define threshold (adjust as needed)
    silence_threshold = np.percentile(rms_energy, 12)  # Lower 15% energy values are considered silence

    # Compute spectral flatness before trimming
    #spectral_flatness_before = librosa.feature.spectral_flatness(y=file_data)


    # Create mask to remove silent sections
    non_silent_frames = np.where(rms_energy > silence_threshold)[0]
    file_data_trimmed = file_data[np.concatenate([np.arange(frame * 512, min((frame + 1) * 512, len(file_data))) for frame in non_silent_frames])]

    #file_data_normalized = LUFS(file_data_trimmed, sampling_rate)  # Normalize loudness
    #file_data_normalized = rms_normalization(file_data_trimmed)  # Normalize RMS energy

    # plt.figure(figsize=(12, 6))
    # plt.subplot(2, 1, 1)
    # librosa.display.waveshow(file_data, sr=sampling_rate)
    # plt.title("Original Waveform")

    # plt.subplot(2, 1, 2)
    # librosa.display.waveshow(file_data_trimmed, sr=sampling_rate)
    # plt.title("Trimmed Waveform")

    # plt.show()

    # Compute spectral flatness after trimming
    # spectral_flatness_after = librosa.feature.spectral_flatness(y=file_data_trimmed)

    # # Plot comparison
    # plt.figure(figsize=(12, 6))
    # plt.plot(spectral_flatness_before.flatten(), label="Before Silence Removal", alpha=0.7)
    # plt.plot(spectral_flatness_after.flatten(), label="After Silence Removal", alpha=0.7)
    # plt.legend()
    # plt.title("Spectral Flatness Before vs. After Trimming")
    # plt.show()


    return file_data_trimmed

def LUFS(file_data, sampling_rate):
    """
    Compute Loudness Units Full Scale (LUFS) of the audio file.

    Parameters:
    file_data (ndarray): Audio data.
    sampling_rate (int): Sampling rate of the audio file.

    Returns:
    float: LUFS value.
    """
    # Measure LUFS
    meter = Meter(sampling_rate)  # Initialize loudness meter
    lufs = meter.integrated_loudness(file_data)

    # Normalize to target LUFS (-23 LUFS is standard, adjust as needed)
    target_lufs = -23
    gain = target_lufs - lufs  # Compute gain adjustment
    file_data_normalized = file_data * (10**(gain / 20))  # Apply gain adjustment
    return file_data_normalized

def rms_normalization(file_data):
    """
    Normalize audio data to a target RMS level.

    Parameters:
    file_data (ndarray): Audio data.

    Returns:
    ndarray: Normalized audio data.
    """
    target_rms = 0.1  # Target RMS level
    current_rms = np.sqrt(np.mean(file_data**2))  # Compute current RMS
    normalization_factor = target_rms / (current_rms + 1e-8)  # Avoid division by zero
    return file_data * normalization_factor  # Normalize audio data
