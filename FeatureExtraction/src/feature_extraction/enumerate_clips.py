
import glob
import os
import random
import librosa
import tqdm

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
    file_data, sr = librosa.load(file_path, sr=None)
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
