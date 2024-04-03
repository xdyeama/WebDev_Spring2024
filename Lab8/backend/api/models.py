from django.db import models
# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=200, default="")
    price = models.FloatField(default=0.0)
    category = models.IntegerField(default=1)
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is active': self.is_active,
            'category': self.category
        }


class Category(models.Model):
    name = models.CharField(max_length=200, default="")

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }
