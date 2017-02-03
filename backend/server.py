from flask import Flask
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_restful import Resource, Api

import types

class User(object):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __str__(self):
        return "User(id='%s')" % self.id

users = [
    User(1, 'user1', 'abcxyz'),
    User(2, 'user2', 'abcxyz'),
]

username_table = {u.username: u for u in users}
userid_table = {u.id: u for u in users}

def authenticate(username, password):
    user = username_table.get(username, None)
    if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
        return user

def identity(payload):
    user_id = payload['identity']
    return userid_table.get(user_id, None)

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'
app.config['JWT_AUTH_URL_RULE'] = '/api/authenticate'
app.config['JWT_AUTH_USERNAME_KEY'] = 'username'
app.config['JWT_AUTH_PASSWORD_KEY'] = 'password'

api = Api(app)

class HelloWorld(Resource):
  @jwt_required()
  def get(self):
    return {'hello': 'world'}

class WOAuth(Resource):
  def get(self):
    return {'hello': 'world'}

api.add_resource(HelloWorld, '/test')
api.add_resource(WOAuth, '/test2')

jwt = JWT(app, authenticate, identity)

# @app.route('/protected')
# @jwt_required()
# def protected():
#     return '%s' % current_identity

# @app.route('/test/{id}')
# def test():
#   return 'test successful: '+ id

if __name__ == '__main__':
    app.run()
