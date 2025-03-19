from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from datetime import datetime, timezone
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

load_dotenv()

app = Flask(__name__)
# app.config['JSON_AS_ASCII'] = False
SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
if not SQLALCHEMY_DATABASE_URI:
    raise ValueError("SQLALCHEMY_DATABASE_URI environment variable not set.")

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
db = SQLAlchemy(app)
migrate = Migrate(app, db)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False)
    firebase_uid = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    idea_posts = db.relationship('IdeaPost', backref='user', lazy=True)
    metos = db.relationship('Meto', backref='user', lazy=True)
    forms = db.relationship('Form', backref='user', lazy=True)

class IdeaPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.now(timezone.utc)) 
    main_category = db.Column(db.String(255), nullable=False)
    sub_category = db.Column(db.String(255), nullable=False)
    kanatta = db.Column(db.String(255), nullable=True) 
    metos = db.relationship('Meto', backref='idea_post', lazy=True)

class Meto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    idea_post_id = db.Column(db.Integer, db.ForeignKey('idea_post.id'), nullable=False)
    __table_args__ = (db.UniqueConstraint('user_id', 'idea_post_id'),)

class Form(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    text = db.Column(db.Text, nullable=False)
    title = db.Column(db.String(255), nullable=False)


# TODO:後で消す
@app.route("/")
def hello():
    return "good"


@app.route('/idea_post', methods=['GET', 'POST'])
def idea_post():
    if request.method == 'GET':
        idea_posts = IdeaPost.query.all()
        return jsonify([{'id': post.id, 'title': post.title, 'message': post.message, 'date': post.date, 'main_category': post.main_category, 'sub_category': post.sub_category, 'kanatta': post.kanatta} for post in idea_posts])
    elif request.method == 'POST':
        try:
            data = request.get_json()
            date_str = data.get('date') # dateを取得
            date_obj = datetime.fromisoformat(date_str.replace("Z", "+00:00")) if date_str else datetime.utcnow()
            new_post = IdeaPost(user_id=data['user_id'], title=data['title'], message=data['message'], date=date_obj, main_category=data['main_category'], sub_category=data['sub_category'], kanatta=data.get('kanatta'))
            db.session.add(new_post)
            db.session.commit()
            return jsonify({'message': 'IdeaPost created successfully'}), 201
        except Exception as e:
            print(f"Error creating IdeaPost: {e}")
            return jsonify({'message': 'Failed to create IdeaPost'}), 500


# UserのPOST API
@app.route('/users', methods=['GET', 'POST'])
def create_user():
    if request.method == 'POST':
        try:
            data = request.get_json()
            new_user = User(
                email=data['email'],
                firebase_uid=data['firebase_uid'],
                first_name=data['first_name'],
                last_name=data['last_name']
            )
            db.session.add(new_user)
            db.session.commit()
            return jsonify({'message': 'User created successfully', 'user_id': new_user.id}), 201
        except Exception as e:
            print(f"Error creating user: {e}")
            return jsonify({'error': str(e)}), 400
    
    # GET リクエストの処理
    elif request.method == 'GET':
        try:
            users = User.query.all()
            users_list = []
            for user in users:
                user_data = {
                    'id': user.id,
                    'email': user.email,
                    'firebase_uid': user.firebase_uid,
                    'first_name': user.first_name,
                    'last_name': user.last_name
                }
                users_list.append(user_data)
            return jsonify(users_list), 200
        except Exception as e:
            print(f"Error retrieving users: {e}")
            return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)