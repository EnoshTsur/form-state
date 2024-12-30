from flask import Blueprint, request, jsonify

user_blueprint = Blueprint('users', __name__)

@user_blueprint.route('/add', methods=['POST'])
def add_user():
    user = request.json
    return jsonify({ 'accepted': user, 'success': True }), 201

