from django.urls import path
#from orders.api.views import order_list_create_api_view, order_details_api_view
from orders.api.views import OrderListCreateAPIView, OrderDetailAPIView

urlpatterns = [
    #Urls for the fuction endpoints
    # path("orders/", order_list_create_api_view, name="order-list"),
    # path("orders/<int:pk>/", order_details_api_view, name="order-details")

    #Urls for the class endpoints
    path("orders/", OrderListCreateAPIView.as_view(), name="order-list"),
    path("orders/<int:pk>/", OrderDetailAPIView.as_view(), name="order-detail")
]