from rest_framework import serializers
from .models import Product, Order, OrderProductList, Cart


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'date', 'total_price', 'user']

class OrderProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProductList
        fields = ['id', 'order', 'product', 'price']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'products']
