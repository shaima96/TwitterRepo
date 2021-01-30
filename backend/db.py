from flask_pymongo import pymongo
from flask import Flask
import urllib.parse

# database
client = pymongo.MongoClient("mongodb+srv://xoro:"+urllib.parse.quote("p@ssvv0rd")+"@cluster0.rphug.mongodb.net/Portfolio?retryWrites=true&w=majority")
db = pymongo.database.Database(client, 'Twittrer')
col = pymongo.collection.Collection(db, 'users')