from flask import Flask, render_template, url_for, request, session, redirect, jsonify, Response
from flask_jwt import JWT, jwt_required, current_identity
from bson import json_util, ObjectId
from flask_cors import CORS
import bcrypt
import json
import os
import db

# define app as flask
app = Flask(__name__)

# enables CORS
cors = CORS(app)

# locate the directory of the app file
basedir = os.path.abspath(os.path.dirname(__file__))

# routes
@app.route('/')
def index():
    if 'username' in session:
        return 'You are logged in as ' + session['username']
    return render_template('signin.html')

@app.route('/signin', methods=['POST', 'GET'])
def signin():
    if request.method == 'POST':
        users = db.db.users
        signin_user = users.find_one({'name' : request.form['username']})
        if signin_user:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), signin_user['password'].encode('utf-8')) == signin_user['password'].encode('utf-8'):
                session['username'] = request.form['username']
                return redirect(url_for('index'))
        return 'Invalid username or password'
    return render_template('signin.html')


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'POST':
        users = db.db.users
        existing_user = users.find_one({'name' : request.form['username']})
        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name' : request.form['username'], 'password' : hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        return 'Username taken!'
    return render_template('signup.html')
                
# run the flask app
if __name__ == '__main__':
    app.secret_key = 'qwertyasdf'
    app.run(debug=True, host="0.0.0.0", port="5000")
