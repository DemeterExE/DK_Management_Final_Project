from django.db import models
from customers.models import Customer
# Creating models.. the entities that depict what i want my table to show
class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('not_sent', 'Not Sent Yet'),
        ('order_change', 'Order Change'),
        ('order_canceled', 'Order Canceled'),
    ]

    #customer = models.CharField(max_length=225)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    quantity = models.IntegerField()
    location = models.CharField(max_length=225)
    date = models.DateTimeField()
    total = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

 # With this we see the Order Id and the Name of the customer when we add new orders!
    def __str__(self):
        return f"Order #{self.id} - {self.customer}"