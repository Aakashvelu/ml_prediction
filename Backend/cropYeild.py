import pickle
import pandas as pd
from flask import Flask, request
from flask_cors import CORS
model = pickle.load(open("RandomForest.pkl", 'rb'))



app = Flask(__name__)
CORS(app)

@app.route('/yield')
def index():
    args = request.args
    args = args.to_dict()
    ans = model.predict(pd.DataFrame([[ float(args.get("nit")) , float(args.get("phos")) , float(args.get("pot")), float(args.get("temp")), float(args.get("humid")) , float(args.get("ph")),float(args.get("rain"))]],
    columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']))
 
    return str(ans[0])

app.run(host='0.0.0.0', port=8080)