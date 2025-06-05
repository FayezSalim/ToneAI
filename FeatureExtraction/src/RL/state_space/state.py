# Define initial state space for RL model
helix_state_space = {
    "amp": {
        "model": None,  # Will be selected dynamically
        "parameters": {
            "drive": (0, 10),  # Gain range
            "bass": (0, 10),
            "mid": (0, 10),
            "treble": (0, 10),
            "presence": (0, 10),
            "master_volume": (0, 10),
            "sag": (0, 10),
            "bias": (0, 10),
            "bias_x": (0, 10),
            "ripple": (0, 10),
            "hum": (0, 10)
        }
    },
    "cab": {
        "model": None,  # Selected dynamically
        "parameters": {
            "mic_type": ["SM57", "Ribbon", "Condenser"],
            "mic_distance": (1, 10),
            "low_cut": (20, 200),  # Hz
            "high_cut": (5000, 20000),  # Hz
            "early_reflections": (0, 100)
        }
    },
    "distortion": {
        "model": None,
        "parameters": {
            "drive": (0, 10),
            "tone": (0, 10),
            "level": (0, 10),
            "clipping_mode": ["Soft", "Hard", "Asymmetrical"]
        }
    },
    "modulation": {
        "model": None,
        "parameters": {
            "rate": (0.1, 10),
            "depth": (0, 10),
            "mix": (0, 100),
            "feedback": (0, 100)
        }
    },
    "delay": {
        "model": None,
        "parameters": {
            "time": (10, 5000),  # ms
            "feedback": (0, 100),
            "mix": (0, 100),
            "modulation": (0, 10)
        }
    },
    "reverb": {
        "model": None,
        "parameters": {
            "decay": (0, 10),
            "mix": (0, 100),
            "modulation": (0, 10)
        }
    },
    "eq": {
        "model": None,
        "parameters": {
            "low_gain": (-12, 12),
            "mid_gain": (-12, 12),
            "high_gain": (-12, 12),
            "compression_threshold": (-40, 0),
            "compression_ratio": (1, 10),
            "attack": (1, 100),
            "release": (1, 100)
        }
    },
    "stereo": {
        "parameters": {
            "pan_position": (-50, 50),  # -50 = left, 50 = right
            "width": (0, 100)  # 0 = mono, 100 = full stereo
        }
    }
}

# Define model-specific parameters
helix_models = {
    "amps": {
        "Fender Twin": {
            "drive": (0, 10),
            "bass": (0, 10),
            "mid": (0, 10),
            "treble": (0, 10),
            "presence": (0, 10),
            "master_volume": (0, 10),
            "sag": (0, 10),
            "bias": (0, 10),
            "bias_x": (0, 10)
        },
        "Mesa Boogie": {
            "drive": (0, 10),
            "bass": (0, 10),
            "mid": (0, 10),
            "treble": (0, 10),
            "presence": (0, 10),
            "master_volume": (0, 10),
            "sag": (0, 10),
            "bias": (0, 10),
            "bias_x": (0, 10),
            "cut": (0, 10)  # Extra parameter for Mesa amps
        }
    },
    "cabs": {
        "4x12 Greenback": {
            "mic_type": ["SM57", "Ribbon", "Condenser"],
            "mic_distance": (1, 10),
            "low_cut": (20, 200),
            "high_cut": (5000, 20000),
            "early_reflections": (0, 100)
        },
        "2x12 Vintage": {
            "mic_type": ["SM57", "Ribbon", "Condenser"],
            "mic_distance": (1, 10),
            "low_cut": (20, 200),
            "high_cut": (5000, 20000),
            "early_reflections": (0, 100),
            "resonance": (0, 10)  # Extra parameter for Vintage cabs
        }
    },
    "effects": {
        "Tube Screamer": {
            "drive": (0, 10),
            "tone": (0, 10),
            "level": (0, 10)
        },
        "Klon Centaur": {
            "drive": (0, 10),
            "tone": (0, 10),
            "level": (0, 10),
            "clipping_mode": ["Soft", "Hard", "Asymmetrical"]  # Extra parameter for Klon
        }
    }
}