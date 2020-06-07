from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import generics
from shopApp.models import Product, Order, OrderProductList
from shopApp.serializers import ProductSerializer, OrderSerializer, OrderProductListSerializer


@permission_classes((AllowAny,))
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@permission_classes((AllowAny,))
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@permission_classes((AllowAny,))
class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

@permission_classes((AllowAny,))
class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = OrderSerializer

@permission_classes((AllowAny,))
class OrderProductList1(generics.ListCreateAPIView):
    queryset = OrderProductList.objects.all()
    serializer_class = OrderProductListSerializer

@permission_classes((AllowAny,))
class OrderProductListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = OrderProductListSerializer
