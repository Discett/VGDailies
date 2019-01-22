from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class dailies(models.Model):
    userid    = models.IntegerField()
    title     = models.CharField(max_length=30)
    reset     = models.DateField(default=None, blank=True, null=True)
    resetTime = models.TimeField(default=None)

@receiver(post_save, sender =settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
