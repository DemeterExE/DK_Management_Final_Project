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


def validate_customer(self, value):
    if not value:
        raise serializers.ValidationError("Customer is required.")
    return value

def validate_status(self, value):
    if not value:
        raise serializers.ValidationError("Status is required.")
    return value

def quantity(self, value):
    if not value:
        raise serializers.ValidationError("Quantity is required.")
    return value

def location(self, value):
    if not value:
        raise serializers.ValidationError("Location is required.")
    return value

def validate_date(self, value):
    if not value:
        raise serializers.ValidationError("Date is required.")
    return value

def validate_total(self, value):
    if not value:
        raise serializers.ValidationError("Total is required.")
    return value