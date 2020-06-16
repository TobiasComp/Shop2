from django.urls import path

from . import views
from .api import apiviews
from .auth import authviews

app_name = 'shopApp'
urlpatterns = [
    path('login', authviews.login, name='login'),
    path('sample_api', authviews.sample_api, name="sample"),
    path('logout', authviews.logout, name='login'),
    path('signup', authviews.signup, name='signup'),
    path('email', authviews.email, name="email"),
    path('products', apiviews.ProductList.as_view(), name="product_list"),
    path('products/img', views.addProductImage, name="add_product_image"),
    path('products/<int:pk>', apiviews.ProductDetail.as_view(), name="product_detail"),
    path('orders', apiviews.OrderList.as_view(), name="order_list"),
    path('orders/<int:pk>', apiviews.OrderDetail.as_view(), name="order_detail"),
    path('order-product-lists', apiviews.OrderProductList1.as_view(), name="order_product_list"),
    path('order-product-lists/<int:pk>', apiviews.OrderProductListDetail.as_view(), name="order_product_list_detail"),
    path('order-product-lists/arr', views.AddOrderProductListArray, name="add_order_product_list"),
    path('userorders/<int:pk>', views.AllUserOrders, name='userOrders')
]
