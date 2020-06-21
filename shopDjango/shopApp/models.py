from django.db import models
from django.contrib.auth.models import User
# Create your models here.
# class OrderProductList(models.Model):
#     id = models.IntegerField(unique=True, auto_created=True)
#     order_id = models.
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(default=0, max_digits=10, decimal_places=2)

class Order(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)

class OrderProductList(models.Model):
    order = models.ForeignKey(Order, related_name='orderProductList', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='orderProductList', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Cart(models.Model):
    user = models.ForeignKey(User, related_name='cart', on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name='product', on_delete=models.CASCADE)
