from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from requests import Response
from rest_framework.decorators import  permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_200_OK
)
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from shopApp.models import Product, Order, OrderProductList
from shopApp.serializers import  OrderSerializer, OrderProductListSerializer


@csrf_exempt
@permission_classes((AllowAny,))
def AddOrderProductListArray(request):
    print("this is the request as is", request.POST)
    data = JSONParser().parse(request)
    print("this is the data after being parsed for json", data)
    serializer = OrderProductListSerializer(data=data, many=True)

    if serializer.is_valid():
        serializer.save()
        print("this is hte data after the serializer", serializer.data)
    return JsonResponse(serializer.data, safe=False, status=HTTP_200_OK)

@api_view(['GET'])
@csrf_exempt
@permission_classes((AllowAny,))
def AllUserOrders(request, pk):
    orders = Order.objects.filter(user=pk)
    print(orders)
    serializer = OrderSerializer(orders, many=True)
    print(serializer.data)
    allProducts = list()
    for order in serializer.data:
        print(order)
        print(order['id'])
        orderProducts = OrderProductList.objects.filter(order=order['id'])
        print(orderProducts)
        serializerProducts = OrderProductListSerializer(orderProducts, many=True)
        allProducts.extend(serializerProducts.data)
    return JsonResponse(allProducts, safe=False)

@api_view(['POST'])
@csrf_exempt
@permission_classes((AllowAny,))
def addProductImage(request):
    print(request.data)
    return Response()