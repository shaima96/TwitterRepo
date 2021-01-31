from flask import Flask, render_template, url_for, request, session, redirect, jsonify, Response
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_cors import CORS, cross_origin
from bson import json_util, ObjectId
from os import environ
import datetime
import bcrypt
import json
import os
import db

# define app as flask
app = Flask(__name__)

# jwt
people = db.db.users.find()
username_table = {u['username']: u for u in people}
userid_table = {u['_id']: u for u in people}

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
CORS(app, resources={r"/*": {"origins": "*"}})

# locate the directory of the app file
basedir = os.path.abspath(os.path.dirname(__file__))

# routes
@app.route('/')
@cross_origin()
def index():
    if 'username' in session:
        return render_template('signout.html')
    return render_template('signin.html')

@app.route('/signin', methods=['POST', 'GET'])
@cross_origin()
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
                session['email'] = signin_user['email']
                return {'data' : signin_user['email']}
        return 'Invalid username or password'
    return render_template('signin.html')


@app.route('/signup', methods=['POST', 'GET'])
@cross_origin()
def signup():
    if 'username' in session:
        return render_template('signout.html')
    if request.method == 'POST':
        users = db.db.users
        existing_user = users.find_one({'email' : request.form['email']})
        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'username' : request.form['username'], 'password' : hashpass, 'email' : request.form['email'], 'avatar': 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg', 'cover': '', 'phone': '', 'dob' : request.form['dob'], 'tweets': 0, 'following': 0, 'followers': 0, 'bio': 'Thank you for visiting my profile', 'saves': [], 'retweets': [], 'likes': []})
            return {'data' : 'created'}
        return 'Username taken!'
    return render_template('signup.html')

@app.route('/signout', methods=['GET'])
@cross_origin()
def signout():
        session.clear()
        return redirect(url_for('signin'))

@app.route('/email', methods=['POST'])
@cross_origin()
def email():
        users = db.db.users
        existing_user = users.find_one({'email' : request.form['email']})
        if existing_user is None:
            return "no"
        existing_user['_id'] = str(existing_user['_id'])
        return {"data":existing_user }

@app.route('/user', methods=['POST'])
@cross_origin()
def user():
        users = db.db.users
        existing_user = users.find_one({'username' : request.form['username']})
        if existing_user is None:
            return "no"
        existing_user['_id'] = str(existing_user['_id'])
        return {"data":existing_user }

@app.route('/tweet', methods=['POST'])
@cross_origin()
def tweet():
        users = db.db.users
        existing_user = users.find_one({'email' : request.form['email']})
        posts = db.db.posts
        if existing_user is None:
            return "no"
        s=[]
        for tweet in posts.find({'email' : request.form['email']}):
            tweet['_id'] = str(tweet['_id'])
            s.append(tweet)
        return {"data":s}

@app.route('/users', methods=['GET'])
@cross_origin()
def users():
        s=[]
        for user in db.db.users.find():
            user['_id'] = str(user['_id'])
            user['password']="secret"
            s.append(user)
        return {"data":s}

@app.route('/tweets', methods=['GET','POST'])
@cross_origin()
def tweets():
        if request.method == 'POST':
            users = db.db.users
            posts = db.db.posts
            user = users.find_one({'email' : request.form['email']})
            posts.insert({'username': user['username'], 'email': user['email'], 'avatar': user['avatar'], 'tweet': request.form['tweet'], 'img': request.form['img'], 'time': datetime.datetime.now().strftime("%X"), 'date': datetime.datetime.now().strftime("%x"),'likes': 0, 'retweets': 0, 'comments': []})
            return "ok"
        s=[]
        for post in db.db.posts.find():
            post['_id'] = str(post['_id'])
            s.append(post)
        return {"data":s}

@app.route('/like', methods=['POST'])
@cross_origin()
def like():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'likes': post['like']+1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$push": {'likes': post['_id']}})
        return "ok"
        
@app.route('/unlike', methods=['POST'])
@cross_origin()
def unlike():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'likes': post['like']-1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$pull": {'likes': post['_id']}})
        return "ok"
        
@app.route('/retweet', methods=['POST'])
@cross_origin()
def retweet():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'retweets': post['retweets']+1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$push": {'retweets': post['_id']}})
        return "ok"
        
@app.route('/unretweet', methods=['POST'])
@cross_origin()
def unretweet():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'retweets': post['retweets']-1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$pull": {'retweets': post['_id']}})
        return "ok"

@app.route('/save', methods=['POST'])
@cross_origin()
def save():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'saves': post['saves']+1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$push": {'saves': post['_id']}})
        return "ok"
        
@app.route('/unsave', methods=['POST'])
@cross_origin()
def unsave():
        posts = db.db.posts
        post = posts.find_one({'_id' : request.form['id']})
        posts.update_one({'_id' : request.form['id']},{'saves': post['saves']-1})
        users = db.db.users
        users.update_one({'email' : request.form['email']},{"$pull": {'saves': post['_id']}})
        return "ok"

@app.route('/follow', methods=['POST'])
@cross_origin()
def follow():
        users = db.db.users
        user = users.find_one({'email' : request.form['email']})
        users.update_one({'email' : request.form['email']},{"following": user['following']+1})
        user2 = users.find_one({'username' : request.form['username']})
        users.update_one({'username' : request.form['username']},{"followers": user['followers']+1})
        return "ok"
        
@app.route('/unfollow', methods=['POST'])
@cross_origin()
def unfollow():
        users = db.db.users
        user = users.find_one({'email' : request.form['email']})
        users.update_one({'email' : request.form['email']},{"following": user['following']-1})
        user2 = users.find_one({'username' : request.form['username']})
        users.update_one({'username' : request.form['username']},{"followers": user['followers']-1})
        return "ok"

# run the flask app
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=environ.get("PORT", 5000))
