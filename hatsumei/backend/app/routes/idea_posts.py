from flask import Blueprint, request, jsonify
from app.models.idea_post import IdeaPost
from app.schemas.idea_post_schema import IdeaPostSchema
from app import db

idea_posts_bp = Blueprint('idea_posts', __name__)
idea_post_schema = IdeaPostSchema()
idea_posts_schema = IdeaPostSchema(many=True)

@idea_posts_bp.route('/idea_posts', methods=['GET'])
def get_idea_posts():
    idea_posts = IdeaPost.query.all()
    return jsonify(idea_posts_schema.dump(idea_posts))

@idea_posts_bp.route('/idea_posts/<int:idea_post_id>', methods=['GET'])
def get_idea_post(idea_post_id):
    idea_post = IdeaPost.query.get_or_404(idea_post_id)
    return idea_post_schema.jsonify(idea_post)

@idea_posts_bp.route('/idea_posts', methods=['POST'])
def create_idea_post():
    data = request.get_json()
    new_idea_post = idea_post_schema.load(data)
    db.session.add(new_idea_post)
    db.session.commit()
    return idea_post_schema.jsonify(new_idea_post), 201

@idea_posts_bp.route('/idea_posts/<int:idea_post_id>', methods=['PUT'])
def update_idea_post(idea_post_id):
    idea_post = IdeaPost.query.get_or_404(idea_post_id)
    data = request.get_json()
    updated_idea_post = idea_post_schema.load(data, instance=idea_post)
    db.session.commit()
    return idea_post_schema.jsonify(updated_idea_post)

@idea_posts_bp.route('/idea_posts/<int:idea_post_id>', methods=['DELETE'])
def delete_idea_post(idea_post_id):
    idea_post = IdeaPost.query.get_or_404(idea_post_id)
    db.session.delete(idea_post)
    db.session.commit()
    return '', 204