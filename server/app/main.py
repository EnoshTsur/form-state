from flask import Flask
from flask_cors import CORS
from app.routes.user_route import user_blueprint

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.register_blueprint(user_blueprint, url_prefix='/api/users')
    app.run(port=5000)
