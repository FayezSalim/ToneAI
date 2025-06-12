import librosa
import librosa.display
#import essentia.standard as es
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# Load audio file
audio_path = "highway_to_hell_guitar.mp3"
y, sr = librosa.load(audio_path, sr=44100)

### 🔹 Spectral Features (Capturing Tone Quality) ###
spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr)
spectral_bandwidth = librosa.feature.spectral_bandwidth(y=y, sr=sr)
spectral_flatness = librosa.feature.spectral_flatness(y=y)
spectral_contrast = librosa.feature.spectral_contrast(y=y, sr=sr)

### 🔹 Envelope Features (Attack, Sustain, Decay) ###
rms_energy = librosa.feature.rms(y=y)
onset_frames = librosa.onset.onset_detect(y=y, sr=sr)
onset_times = librosa.frames_to_time(onset_frames, sr=sr)

# Find peaks in RMS energy for attack & decay
peaks, _ = find_peaks(rms_energy.flatten(), height=np.percentile(rms_energy, 75))

### 🔹 Harmonic vs. Distortion Features ###
harmonic, percussive = librosa.effects.hpss(y)  # Separates harmonic from percussive elements
zcr = librosa.feature.zero_crossing_rate(y=y)   # High ZCR suggests distortion
crest_factor = np.max(y) / np.mean(rms_energy)  # Measures signal compression

### 🔹 EQ Profiling (Tonal Balance) ###
mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)  # Captures tonal characteristics
chroma = librosa.feature.chroma_stft(y=y, sr=sr)  # Helps identify harmonic content

### 🔹 Modulation & Effects Analysis ###
vibrato_depth = np.var(librosa.feature.delta(y))  # Measures pitch modulation intensity
reverb_tail = np.mean(librosa.feature.spectral_rolloff(y=y, sr=sr))  # Identifies decay characteristics

### 🔹 Dynamic Range (Compression & Gain) ###
dynamic_range = np.ptp(rms_energy)  # Measures peak-to-lowest energy variations
peak_rms_ratio = np.max(rms_energy) / np.mean(rms_energy)  # Detects compression level

# Print Extracted Feature Values
print(f"Spectral Centroid (Brightness): {np.mean(spectral_centroid)}")
print(f"Spectral Bandwidth: {np.mean(spectral_bandwidth)}")
print(f"Spectral Flatness (Distortion Indicator): {np.mean(spectral_flatness)}")
print(f"Zero Crossing Rate (Gain/Clipping): {np.mean(zcr)}")
print(f"Crest Factor (Compression Level): {crest_factor}")
print(f"MFCCs (Tone Profile): {np.mean(mfccs, axis=1)}")
print(f"Chroma (Harmonics Mapping): {np.mean(chroma, axis=1)}")
print(f"Vibrato Depth: {vibrato_depth}")
print(f"Reverb Tail Length: {reverb_tail}")
print(f"Dynamic Range Variation: {dynamic_range}")
print(f"Peak-to-RMS Ratio: {peak_rms_ratio}")

# Visualize Spectral Features
plt.figure(figsize=(12, 4))
librosa.display.specshow(librosa.power_to_db(librosa.feature.melspectrogram(y=y, sr=sr)), sr=sr)
plt.title("Mel Spectrogram")
plt.colorbar()
plt.show()