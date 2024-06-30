from rest_framework import serializers
from customers.models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class CustomerSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['firstname', 'lastname']


def validate_firstname(self, value):
    if not value:
        raise serializers.ValidationError("First name is required.")
    return value

def validate_lastname(self, value):
    if not value:
        raise serializers.ValidationError("Last name is required.")
    return value

def validate_address(self, value):
    if not value:
        raise serializers.ValidationError("Address is required.")
    return value

def validate_email(self, value):
    if not value:
        raise serializers.ValidationError("Email is required.")
    return value

def validate_phone_number(self, value):
    if not value:
        raise serializers.ValidationError("Phone number is required.")
    return value