from flask import Flask
from flask_pymongo import pymongo
import app
import urllib.parse

# database
client = pymongo.MongoClient("mongodb+srv://xoro:"+urllib.parse.quote("p@ssvv0rd")+"@cluster0.rphug.mongodb.net/Portfolio?retryWrites=true&w=majority")
db = client.get_database('Portfolio')
user_collection = pymongo.collection.Collection(db, 'user_collection')