from django.db import models


class Login(models.Model):
    label = models.CharField(max_length=255),
    desc = models.FloatField(),
    image_url = models.CharField(max_length=2083)


class Login_new(models.Model):
    label = models.CharField(max_length=255),
    desc = models.FloatField(),
    image_url = models.CharField(max_length=2083),
