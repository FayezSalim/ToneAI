from typing import Any, Dict, Generic, TypeVar


HelixModelParamType = TypeVar("HelixModelParamType", int, float, bool)

class HelixModelParam(Generic[HelixModelParamType]):

    defaultValue: HelixModelParamType
    minValue: HelixModelParamType
    maxValue: HelixModelParamType

    id: str
    name: str

    def __init__(self, name: str, id: str, defaultValue: HelixModelParamType, minValue: HelixModelParamType, maxValue: HelixModelParamType):
        self.defaultValue = defaultValue
        self.minValue = minValue
        self.maxValue = maxValue    
        self.id = id
        self.name = name

class HelixModel:

    parameters: Dict[str, HelixModelParam[Any]]

    id:str
    name:str
    
    def __init__(self, name: str,id:str):
        self.parameters = dict()
        self.id = id
        self.name = name
