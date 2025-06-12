from typing import Any, Dict, List
from model import HelixModel,HelixModelParam


class DiscreteActionSpace:
    components:Dict[str, List[str]]
    signal_chain_order: List[List[str]]

    def __init__(self) -> None:
        self.components =dict()


class ContinousActionSpace:

    name:str
    params:list[HelixModelParam[Any]]

    def __init__(self) -> None:
        pass


def deriveContinousActionSpace(selectedComponents:Dict[str,str],componentData: Dict[str, Dict[str,HelixModel]] ) -> Dict[str,ContinousActionSpace] :
    
    csActions:Dict[str,ContinousActionSpace]=dict()
    paramsToFilter = ["stereo","enabled"]

    for comp,selectedModel in selectedComponents.items():
        csActionSpace = ContinousActionSpace()
        model = componentData[comp][selectedModel]
        csActionSpace.name  = selectedModel
        csActionSpace.params = [
            x for x in model.parameters.values()
            if not any(f in x.name.lower() for f in paramsToFilter)
        ]
        csActions[comp] = csActionSpace
    

    return csActions
