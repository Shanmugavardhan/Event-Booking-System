from flask import Flask
from flask_cors import CORS
from database import engine, Base
from routes.auth import auth_bp 

app = Flask(__name__)
CORS(app)

Base.metadata.create_all(bind=engine)
app.register_blueprint(auth_bp, url_prefix='/auth')

@app.route("/")
def home():
    return {"message": "backend is running"}
if __name__ == "__main__":
    app.run(debug=True)