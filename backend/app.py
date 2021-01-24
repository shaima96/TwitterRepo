from flask_jwt import JWT, jwt_required, current_identity
from Settings.security import authenticate, identity
from flask import Flask, request, jsonify, Response
from bson import json_util, ObjectId
from flask_cors import CORS
import json
import os
import db

# define app as flask
app = Flask(__name__)

# enables CORS
cors = CORS(app)

# JWT 
app.secret_key = 'qwertyasdf'
jwt = JWT(app, authenticate, identity)

# get views from database
@app.route('/', methods=['GET','POST','PUT','DEL'])
def Hello():
    return "Hello"

# locate the directory of the app file
basedir = os.path.abspath(os.path.dirname(__file__))

# run the flask app
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="8000")
