from django.db import models

# Creating models.. the entities that depict what i want my table to show
class Customer(models.Model):
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    address = models.CharField(max_length=80)
    email = models.CharField(max_length=30)
    phoneNumber = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
