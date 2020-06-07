from django.contrib.auth import authenticate
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from rest_framework.parsers import JSONParser
from shopApp.models import Product, Order, OrderProductList
from shopApp.models import OrderProductList as OrderProductList1

from shopApp.serializers import ProductSerializer, OrderSerializer, OrderProductListSerializer
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = User.objects.create(username=username, password=password)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=HTTP_200_OK)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    print("I'm at the login post route from angular")
    username = request.data.get("username")
    password = request.data.get("password")
    # print("username = "+ username)
    # print("password = "+password)
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    print(user)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=HTTP_200_OK)


@csrf_exempt
@api_view(["GET"])
# @permission_classes((AllowAny,))
def logout(request):
    print("I'm at the logout post route from angular")
    print(request.headers['Authorization'])
    token = request.headers['Authorization']
    token = token[6:]
    print("this is the token "+token)
    Token.objects.get(key=token).delete()
    # return Response(status=HTTP_200_OK)


@csrf_exempt
@api_view(["GET"])
def sample_api(request):
    data = {'sample_data': 123}
    return Response(data, status=HTTP_200_OK)

@csrf_exempt
@api_view(["GET"])
@permission_classes((AllowAny,))
def email(request):
    message = Mail(
        from_email='tuvia1234@gmail.com',
        to_emails='tuvia1234@gmail.com',
        subject='Cyber Reporter - Password Reset ',
        html_content="<a href='https://www.google.com'>Click Here</a>")
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)
    return Response(status=HTTP_200_OK)
