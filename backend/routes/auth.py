from flask import Blueprint, request, jsonify
from sqlalchemy.orm import Session
from database import get_db
from models import User
from utils.auth_helper import hash_password, check_password, generate_token
from typing import Dict, Any

auth_bp = Blueprint('auth', __name__)

#-- Signup Endpoint --
@auth_bp.route('/signup', methods=['POST'])
def signup():
    db: Session = next(get_db())
    try:
        data: Dict[str, Any] = request.get_json()

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return jsonify({'error': 'All fields are required'}), 400

        # check if user/email already exists
        if db.query(User).filter((User.username == username) | (User.email == email)).first():
            return jsonify({'error': 'Username or email already exists'}), 400

        hashed_password = hash_password(password)
        new_user = User(username=username, email=email, password_hash=hashed_password)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        # 🔥 Generate a JWT token for the new user (same as signin)
        token = generate_token(new_user.id, new_user.username)

        return jsonify({
            'message': 'User created successfully',
            'token': token
        }), 201
    finally:
        db.close()



@auth_bp.route('/signin', methods=['POST'])
def signin():
    db: Session = next(get_db())
    try:
        data: Dict[str, Any] = request.get_json()

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400

        user = db.query(User).filter(User.email == email).first()
        if not user:
            return jsonify({'error': 'Invalid email'}), 401
        if not check_password(password, user.password_hash):
            return jsonify({'error': 'Invalid password'}), 401

        token = generate_token(user.id, user.username)
        return jsonify({"message": "Signin successful", "token": token}), 200
    finally:
        db.close()
