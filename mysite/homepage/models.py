from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):

    #Creating relationship to base user model provided by django, has built in attributes already
    user = models.OneToOneField(User)

    #additional attributes to append to model
    #username = models.CharField(max_length=100, unique=True)

    #has built in email validator
    #email =  models.EmailField(max_length=100, unique=True)

    profile_pic = models.ImageField(upload_to='profile_pic', blank=True)

    #allows printing of name
    def __str__(self):
        return self.username
