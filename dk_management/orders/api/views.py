from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView # This is the import that we need if we want to make our endpoints with Classes
from rest_framework.generics import get_object_or_404 # we need this as well fro the classes
from orders.models import Order
from orders.api.serializers import OrderSerializer

# Class endpoints
# API Calls.. Get to take our Data, Post to post new Data

class OrderListCreateAPIView(APIView):
    def get(self, request):
        orders = Order.objects.filter()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#PUT to update or replace our Data, DELETE to delete Data

class OrderDetailAPIView(APIView):
    def get_object(self, pk):
        order = get_object_or_404(Order, pk=pk)
        return order
    
    def get(self, request, pk):
        order = self.get_object(pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def put (self, request, pk):
        order = self.get_object(pk)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        order = self.get_object(pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class TotalOrdersAPIView(APIView):
    def get(self, request):
        total_orders = Order.objects.count()
        return Response({'total': total_orders})