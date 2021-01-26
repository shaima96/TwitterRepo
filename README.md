# Twitter Replica
- This repo is a replica version of the famous web app twitter

[![pic](https://www.magisto.com/blog/wp-content/uploads/2019/03/Twitter.jpg)](https://www.magisto.com/blog/wp-content/uploads/2019/03/Twitter.jpg)

## Technologies used
- Frontend: Javascript : React 
- Server : Python : Flask
- Database : AtlasDB : Pymongo
- Deployment : Firebase

## New code lines used 
- to deploy docker to heroku
-```docker build . -t name```
-```heroku login```
-```heroku container:login```
-```heroku container:push web --app=herokuname```
-```heroku container:release web --app=herokuname```