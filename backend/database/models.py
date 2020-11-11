from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class Comment(db.Document):
    name = db.StringField(required=True, unique=True)
    casts = db.ListField(db.StringField(), required=True)
    genres = db.ListField(db.StringField(), required=True)
    added_by = db.ReferenceField('User')

class Community(db.Document):
    amharicText = db.StringField(required=True, unique=True)
    englishText = db.StringField(required=True, unique=True)
    
class User(db.Document):
    firstName = db.StringField(required=True, unique=True)
    lastName = db.StringField(required=True, unique=True)
    username = db.StringField(required=True, unique=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=8)

    # movies = db.ListField(db.ReferenceField('Movie', reverse_delete_rule=db.PULL))

    # User.register_delete_rule(Movie, 'added_by', db.CASCADE)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')
    def check_password(self, password):
        return check_password_hash(self.password, password)