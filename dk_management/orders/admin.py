from django.contrib import admin
from .models import Order, Customer

# Registering models here so we can make backend records 
admin.site.register(Order)
admin.site.register(Customer)