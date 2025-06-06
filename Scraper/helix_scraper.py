
import json




excluded_tags = ["Favorites","Merge","Split","Output","Input","Looper","Send/Return","IR"]
models = []
with open('models.json', 'r') as file:
    data = json.load(file)  # Reads and parses JSON file into a Python dictionary

for obj in data:
    if obj["name"] in excluded_tags:
        continue

    model={}
    model["name"] = obj["name"]
    model["id"] = obj["id"]
    model["subcategories"] = {}
    for sub in obj["subcategories"]:
        if sub["name"] in excluded_tags:
            continue
        model[sub["name"]] = sub["id"]