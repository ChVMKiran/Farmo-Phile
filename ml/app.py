from flask import Flask, request, jsonify
import os
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

crop_model = joblib.load(os.path.join(BASE_DIR, "models", "crop_model.pkl"))
yield_model = joblib.load(os.path.join(BASE_DIR, "models", "yield_model.pkl"))


@app.route("/", methods=["GET"])
def home():
    return "Flask is Working"

@app.route("/crop", methods=["POST"])
def recommend_crop():
    data = request.json
    
    features = pd.DataFrame([{
        "N": data["N"],
        "P": data["P"],
        "K": data["K"],
        "temperature": data["temperature"],
        "humidity": data["humidity"],
        "ph": data["ph"],
        "rainfall": data["rainfall"]
    }])
    
    
    prediction = crop_model.predict(features)
    return jsonify({
        'result' : prediction[0]
    })
    
@app.route("/yield", methods=['POST'])
def predict_yield():
    data = request.json
    
    features = pd.DataFrame([{
        "Crop" : data["Crop"], 
        "Season" : data["Season"], 
        "State" : data["State"],
        "Area" : data["Area"],
        "Annual_Rainfall" : data["Annual_Rainfall"],
        "Fertilizer" : data["Fertilizer"],
        "Pesticide" : data["Pesticide"]
    }])
    
    predict_yield = yield_model.predict(features)
    return jsonify({
        "predicted_yield" : predict_yield[0]
    })
    

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)