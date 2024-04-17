from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200, default="")
    description = models.TextField(max_length=300, default="")
    city = models.CharField(max_length=200, default="")
    address = models.TextField(max_length=200, default="")

    def to_json(self):
        return {
            'id': self.id,
            "name": self.name,
            "description": self.description,
            "city": self.city,
            "address": self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    salary = models.FloatField(default=0.0)
    company = models.ForeignKey(
        'Company', on_delete=models.CASCADE,
        related_name="vacancy", default=""
    )

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "salary": self.salary,
            "company": self.company.to_json()
        }
