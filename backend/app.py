from flask_jwt import JWT, jwt_required, current_identity
from auth import authenticate, identity
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

#########################
#GET
#########################
@app.route('/users', methods=["GET"])
def get():
    try:
        data = list(db.col.find())
        for user in data:
            user["_id"] = str(user["_id"])
        return Response(
            response = json.dumps(data,default=str), 
            status=200,
            mimetype="application/json"
            ) 
    except Exception as e:
        print(e)
        return Response(
            response = json.dumps(
                {"message":"can't get"},default=str), 
                status=404,
                mimetype="application/json"
                ) 


#########################
#POST
#########################
@app.route("/users", methods=["POST"])
#@jwt_required()
def create():
    try:
        user = {"username":request.form["username"]}
        dbResponse = db.col.insert_one(user)
        print(dbResponse.inserted_id)
        return Response(
            response = json.dumps(
                {"message":"Created", 
                "id":f"{dbResponse.inserted_id}"
                },default=str), 
                status=200,
                mimetype="application/json"
                )
    except Exception as e:
        print(e)
        return Response(
            response = json.dumps({"message":"Failed to create"},default=str), 
                status=500,
                mimetype="application/json"
                )

#########################
#PATCH
#########################
@app.route("/users/<string:name>", methods=["PATCH"])
@jwt_required()
def update(name):
    try:
        dbResponse = db.col.update_one(
            {"name":name},
            {"$set":{"name":request.form["name"]}}
        )
        if dbResponse.modified_count == 1:  
            return Response(
                response = json.dumps({"message":"updated!!"},default=str), 
                status=200,
                mimetype="application/json"
                )
        return Response(
            response = json.dumps({"message":"Nothing to Update!!"},default=str), 
            status=200,
            mimetype="application/json"
            )
    except Exception as e:
        print(e)
        return Response(
            response = json.dumps({"message":"OOPS!! can't update"},default=str), 
                status=500,
                mimetype="application/json"
                )

#########################
#DELETE
#########################
@app.route("/users/<string:name>", methods=["DELETE"])
@jwt_required()
def delete(name):
    try:
        dbResponse = db.col.delete_one({"name":name})
        if dbResponse.deleted_count == 1:
            return Response(
                response = json.dumps({"message":"Deleted!!", "name":f"{name}"},default=str), 
                status=200,
                mimetype="application/json"
                )
        return Response(
            response = json.dumps({"message":"Not Found!!", "name":f"{name}"},default=str), 
            status=404,
            mimetype="application/json"
            )
    except Exception as e:
        print(e)
        return Response(
            response = json.dumps({"message":"OOPS!! can't delete"},default=str), 
                status=500,
                mimetype="application/json"
                )
            
# locate the directory of the app file
basedir = os.path.abspath(os.path.dirname(__file__))

# run the flask app
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="5000")
