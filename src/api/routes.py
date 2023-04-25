"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import requests
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

api = Blueprint('api', __name__)
api__key =  os.environ.get('API_KEY')
domain_url = os.environ.get('DOMAIN_URL')

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/ggltoken", methods=["POST"])
def create_token_google():
    email = request.json.get("email", None)
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "User not found"}), 404

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/register", methods=["POST"])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400
    if User.query.filter_by(email=email).first() is not None:
        return jsonify({"msg": "Email address is already registered"}), 400
    hashed_password = generate_password_hash(password)
    new_user = User(email=email, password=hashed_password, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User registered successfully"}), 201

@api.route('/sendmail', methods=['POST'])
def enviar_correo():
    # Obtenga los detalles del carrito de compras del formulario
    email = request.json.get('email')
    name = request.json.get('name')
    phone = request.json.get('phone')
    address = request.json.get('address')
    comment = request.json.get('comment')
    cart = request.json.get('cart')
    price = request.get_json()['price']

    # Cree el mensaje de correo electrónico con los detalles del carrito de compras
    mensaje = f'Informacion del comprador:\n\nEmail: {email}\nName: {name}\nPhone Number: {phone}\nAddress: {address}\nComment: {comment}\n\nDetalles del carrito de compras:\n\n'
    for item in cart:
        mensaje += '- {} ({}): {}\n'.format(item['name'], item['stock'], item['price'])
    mensaje += f"\nPrecio total: {price}"
    # Configure los parámetros necesarios para enviar el correo electrónico utilizando la API de Mailgun
    url = domain_url
    api_key = api__key
    from_email = "sreyes.local139@gmail.com"
    to_email = "sreyes.local139@gmail.com"
    subject = "Detalles del carrito de compras"
    data = {
        "from": from_email,
        "to": to_email,
        "subject": subject,
        "text": mensaje
    }
    auth = ("api", api_key)

    # Envíe el correo electrónico utilizando la API de Mailgun
    response = requests.post(url, auth=auth, data=data)

    # Devuelva una respuesta al usuario indicando que el correo electrónico se envió correctamente
    if response.status_code == 200:
        return 'El correo electrónico se envió correctamente'
    else:
        return 'Error al enviar el correo electrónico: {}'.format(response.content)

@api.route('/products', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product(
        id=data['id'],
        name=data['name'],
        price=data['price'],
        image=data['image'],
        stock=data['stock'],
        qty=data['qty'],
        category=data['category']
    )
    db.session.add(new_product)
    db.session.commit()
    added_product = Product.query.order_by(Product.id.desc()).first()
    return jsonify(added_product.serialize()), 201

@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.serialize() for product in products])

@api.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        abort(404, description=f"Product with id {product_id} not found")
    db.session.delete(product)
    db.session.commit()
    return jsonify(message=f"Product with id {product_id} deleted successfully")

@api.route('/products/<string:name>', methods=['PUT'])
def update_product(name):
    product = Product.query.filter_by(name=name).first()
    if product is None:
        return jsonify({'error': 'Producto no encontrado'}), 404

    data = request.get_json()
    if 'newName' in data:
        product.name = data['newName']
    if 'newPrice' in data:
        product.price = data['newPrice']
    if 'newImage' in data:
        product.image = data['newImage']

    db.session.commit()
    return jsonify(product.serialize())