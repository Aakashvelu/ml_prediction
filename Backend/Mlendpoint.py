import pickle 
import pandas as pd
from flask_cors import CORS
model = pickle.load(open("DecisionTreeRegressors.pkl", 'rb'))
mod = pickle.load(open("RandomForest.pkl", 'rb'))
from flask import Flask, request
app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    args = request.args
    args = args.to_dict()
    ans = model.predict(pd.DataFrame([[args.get("Fruit"),args.get("State"),args.get("District"),args.get("Market"),args.get("Month"),args.get("Season"),int(args.get("Day"))]] , columns=['commodity_name','state','district','market','month_column','season_names','day']))
 
    return str(ans[0])

@app.route('/yield')
def ind():
    args = request.args
    args = args.to_dict()
    an = mod.predict(pd.DataFrame([[ float(args.get("nit")) , float(args.get("phos")) , float(args.get("pot")), float(args.get("temp")), float(args.get("humid")) , float(args.get("ph")),float(args.get("rain"))]],
    columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']))
 
    return str(an[0])

app.run(host='0.0.0.0', port=8080)





