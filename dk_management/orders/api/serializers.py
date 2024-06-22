from rest_framework import serializers
from orders.models import Order
from customers.models import Customer
from customers.api.serializers import CustomerSummarySerializer

#If i don't want to write/get every model one by one.. i can just write it like this
class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSummarySerializer()
    class Meta:
        model = Order
        fields = "__all__"

# Writing/get models one by one

# class OrderSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     customer = serializers.CharField()
#     status = serializers.CharField()
#     quantity = serializers.IntegerField()
#     location = serializers.CharField()
#     date = serializers.DateTimeField()
#     total = serializers.FloatField()
#     created_at = serializers.DateTimeField(read_only=True)
#     updated_at = serializers.DateTimeField(read_only=True)

    # def create(self, validated_data):
    #     print(validated_data)
    #     return Order.objects.create(**validated_data) ## with ** we take all the values we made
    
    # def update(self, instance, validated_data):
    #     instance.customer = validated_data.get('customer', instance.customer)
    #     instance.status = validated_data.get('status', instance.status)
    #     instance.quantity = validated_data.get('quantity', instance.quantity)
    #     instance.location = validated_data.get('location', instance.location)
    #     instance.date = validated_data.get('date', instance.date)
    #     instance.total = validated_data.get('total', instance.total)
    #     instance.save()
    #     return instance