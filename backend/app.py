from flask import Flask, render_template, url_for, request, session, redirect, jsonify, Response
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_cors import CORS, cross_origin
from bson import json_util, ObjectId
from os import environ
import bcrypt
import json
import os
import db

# define app as flask
app = Flask(__name__)

# jwt
people = db.db.users
username_table = {u.username: u for u in people}
userid_table = {u.id: u for u in people}

def authenticate(username, password):
    user = username_table.get(username, None)
    if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
        return user

def identity(payload):
    user_id = payload['identity']
    return userid_table.get(user_id, None)

app.config['SECRET_KEY'] = 'qwertyasdf'
jwt = JWT(app, authenticate, identity)

# enables CORS
cors = CORS(app)

# locate the directory of the app file
basedir = os.path.abspath(os.path.dirname(__file__))

# routes
@app.route('/')
def index():
    if 'username' in session:
        return render_template('signout.html')
    return render_template('signin.html')

@app.route('/signin', methods=['POST', 'GET'])
def signin():
    if 'username' in session:
        return render_template('signout.html')
    if request.method == 'POST':
        users = db.db.users
        signin_user = users.find_one({'username' : request.form['username']})
        if signin_user is None:
            signin_user = users.find_one({'email' : request.form['username']})
        if signin_user:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), signin_user['password']) == signin_user['password']:
                session['username'] = request.form['username']
                return request.form['username']
        return 'Invalid username or password'
    return render_template('signin.html')


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if 'username' in session:
        return render_template('signout.html')
    if request.method == 'POST':
        users = db.db.users
        existing_user = users.find_one({'username' : request.form['username']})
        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'username' : request.form['username'], 'password' : hashpass, 'email' : request.form['email'], 'dob' : request.form['dob']})
            return redirect(url_for('signin'))
        return 'Username taken!'
    return render_template('signup.html')

@app.route('/signout', methods=['GET'])
def signout():
        session.clear()
        return redirect(url_for('signin'))

@app.route('/email', methods=['POST'])
def email():
        users = db.db.users
        existing_user = users.find_one({'email' : request.form['email']})
        if existing_user is None:
            return "ok"
        return "no" 

@app.route('/user', methods=['POST'])
def user():
        users = db.db.users
        existing_user = users.find_one({'username' : request.form['username']})
        if existing_user is None:
            return "ok"
        return "no" 

@app.route('/users', methods=['GET'])
def users():
        s=""
        for user in db.db.users.find():
            s+=str(user)+"\n"
        return s

@app.route('/tweets', methods=['GET','POST'])
def tweets():
        if request.method == 'POST':
            collection = db.db.posts
            collection.insert({'user': request.form['username'] ,'post': request.form['post']})
            return "ok"
        s=""
        for post in db.db.posts.find():
            s+=str(post)+"\n"
        return s

# run the flask app
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=environ.get("PORT", 5000))
