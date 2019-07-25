import os
from flask import Flask,render_template,jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
CORS(app)


# postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
DB_URL = 'postgres://postgres:password@localhost:5432/comp250'

# Often people will also separate these into a separate config.py file
app.config['SECRET_KEY'] = 'mysecretkey'
basedir = os.path.abspath(os.path.dirname(__file__))

# here is linking to the DB_URL:
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
Migrate(app,db)


