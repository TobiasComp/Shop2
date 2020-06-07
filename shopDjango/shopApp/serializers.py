from rest_framework import serializers
from .models import Product, Order, OrderProductList

# class ProductSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField(max_length=255)
#     price = serializers.DecimalField(max_digits=10, decimal_places=2)
#
#     def create(self, validated_data):
#         return Product.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.price = validated_data.get('price', instance.price)
#         instance.save()
#         return instance
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


#  from shopApp.models import Profrom shopApp.models import Productduct
# from shopApp.serializers import ProductSerializer