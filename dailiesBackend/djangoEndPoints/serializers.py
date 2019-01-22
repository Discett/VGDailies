from django.contrib.auth.models import User
from rest_framework import serializers
from djangoEndPoints.models import dailies


class DailiesSerializer(serializers.Serializer):
    class Meta:
        model = dailies
        fields = ('title','reset')
