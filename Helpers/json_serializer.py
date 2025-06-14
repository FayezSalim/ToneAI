import json
from typing import Any
import numpy as np

class JsonSerializer(json.JSONEncoder):
    def default(self, o):
        try:
            if isinstance(o, np.floating):
                return float(o)
            return super().default(o)
        
        except:
            print(o)
        



def write_json(path:str,data:Any):
    with open(path, 'w') as f:
        json.dump(data, f, cls=JsonSerializer, indent=4)

def read_json(path:str):
    data=None
    with open(path, 'r') as f:
        data= json.load(f)

    return data