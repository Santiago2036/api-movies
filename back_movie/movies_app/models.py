from django.db import models

class Actor(models.Model):
    name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.IntegerField()
    imagen = models.CharField(max_length=2000)
    create_at = models.DateTimeField(auto_now_add=True)


class Movies(models.Model):
    name = models.CharField(max_length=200)
    gender = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    year = models.IntegerField(max_length=20)
    imagen = models.CharField(max_length=2000)
    create_at = models.DateTimeField(auto_now_add=True)

    actors = models.ManyToManyField(Actor)


