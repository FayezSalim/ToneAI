import json
from typing import Dict, List
from model import HelixModel,HelixModelParam
from actions import DiscreteActionSpace,deriveContinousActionSpace

def generateSignalChainOrder(keys: List[str]) -> List[List[str]]:
    signal_chain_order = []
    
    # Generate all permutations of components
    from itertools import permutations
    for perm in permutations(keys):
        signal_chain_order.append(list(perm))
    
    return signal_chain_order


# Load the Helix models JSON file
with open("helix_models_to_process.json", "r", encoding="utf-8") as file:
    helix_data= json.load(file)

# Define the action space structure
components: Dict[str, Dict[str,HelixModel]] = {}

for component in helix_data:

    components[component['name']]= dict()

    for category in component['subcategories']:

        ## sub category distinction matters?
        for model in category['models']:
            
            if model.get('id')==None or components[component['name']].get(model['id'])!=None:
                continue                                                 
            
            helixModel = HelixModel(model['name'], model['id'])            

            for param in model['parameters']:
                helixModelParam = HelixModelParam[float](
                    name=param['name'],
                    id=param['id'],
                    defaultValue=param['defaultValue'],
                    minValue=param.get('min', None),
                    maxValue=param.get('max', None)
                )
                helixModel.parameters[param['id']] = helixModelParam

            components[component['name']][model['id']]=helixModel

discreteActionSpace = DiscreteActionSpace()

for comp_key, comp in components.items():
    discreteActionSpace.components[comp_key+ "_models"] = list([model for model in comp])

discreteActionSpace.signal_chain_order = generateSignalChainOrder(list(components.keys()))

selectedComp = dict()
selectedComp["Amp"]="HD2_AmpWhoWatt100"
selectedComp["Cab"]="HD2_CabMicIr_1x10USPrincess"
selectedComp["Distortion"]="HD2_DistDerangedMaster"

cs = deriveContinousActionSpace(selectedComp,components)


# action_space = {
#     "discrete": {
#         "amp_model": list([for amps in components['amps']]),
#         "cab_model": list(helix_data["cabs"].keys()),
#         "distortion_model": list(helix_data["distortions"].keys()),
#         "signal_chain_order": [
#             ["amp", "cab", "distortion"],
#             ["distortion", "cab", "amp"],
#             ["cab", "amp", "distortion"]
#         ]
#     },
#     "continuous": {}
# }



# Print action space structure
import pprint
pprint.pprint(discreteActionSpace)


