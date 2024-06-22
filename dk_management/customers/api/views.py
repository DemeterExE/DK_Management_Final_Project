from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView # This is the import that we need if we want to make our endpoints with Classes
from rest_framework.generics import get_object_or_404 # we need this as well fro the classes
from customers.models import Customer
from customers.api.serializers import CustomerSerializer

# Class endpoints
# API Calls.. Get to take our Data, Post to post new Data

class CustomerListCreateAPIView(APIView):
    def get(self, request):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#PUT to update or replace our Data, DELETE to delete Data

class CustomerDetailAPIView(APIView):
    def get_object(self, pk):
        customer = get_object_or_404(Customer, pk=pk)
        return customer
    
    def get(self, request, pk):
        customer = self.get_object(pk)
        serializer = CustomerSerializer(customer)
        return Response(serializer.data)
    
    def put (self, request, pk):
        customer = self.get_object(pk)
        serializer = CustomerSerializer(customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        customer = self.get_object(pk)
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)