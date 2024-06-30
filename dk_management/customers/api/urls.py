from django.urls import path
from customers.api.views import CustomerListCreateAPIView, CustomerDetailAPIView, TotalCustomersAPIView

urlpatterns = [
    path("customers/", CustomerListCreateAPIView.as_view(), name="customer-list"),
    path("customers/<int:pk>/", CustomerDetailAPIView.as_view(), name="customer-detail"),
    path('customers/total/', TotalCustomersAPIView.as_view(), name='total-customers'),
]