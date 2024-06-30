from django.urls import path
#from orders.api.views import order_list_create_api_view, order_details_api_view
from orders.api.views import OrderListCreateAPIView, OrderDetailAPIView, TotalOrdersAPIView

urlpatterns = [
    path("orders/", OrderListCreateAPIView.as_view(), name="order-list"),
    path("orders/<int:pk>/", OrderDetailAPIView.as_view(), name="order-detail"),
    path('orders/total/', TotalOrdersAPIView.as_view(), name='total-orders'),
]