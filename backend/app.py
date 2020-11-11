from flask import Flask, session, render_template, request, Response

from database.db import initialize_db

from flask_restful import Api
# from resources.routes import initialize_routes
from flask_bcrypt import Bcrypt
from flask_jwt_extended  import JWTManager
from resources.errors import errors
from flask_cors import CORS
import re
from flask_mail import Mail


app = Flask(__name__)
app.config.from_envvar('ENV_FILE_LOCATION')

mail = Mail(app)

from resources.routes import initialize_routes
api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# app.config['MONGO_DBNAME'] = 'ettranslate'
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/ettranslate'

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://locamail = Mail(App)lhost/ettranslate'
}
CORS(app)

initialize_db(app)

initialize_routes(api)

# from routes.routes import auth as auth_blueprint
# app.register_blueprint(auth_blueprint)
