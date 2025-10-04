import bcrypt
import jwt
from datetime import datetime, timedelta, timezone

# Secret key for JWT (keep it safe!)
SECRET_KEY = "your_secret_key"

#password hashing
def hash_password(password: str) -> str:
    #Generate salt & hash password
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def check_password(password: str, hashed: str) -> bool:
    #Verify password against stored hash
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

#--- JWT token ---
def generate_token(user_id: int, expires_in: int = 60) -> str:
    payload = {
        "user_id": user_id,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=expires_in),
        "iat": datetime.now(timezone.utc)
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token

def verify_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return {"valid": True, "user_id": payload["user_id"]}
    except jwt.ExpiredSignatureError:
        return {"valid": False, "error": "Token has expired"}
    except jwt.InvalidTokenError:
        return {"valid": False, "error": "Invalid token"}