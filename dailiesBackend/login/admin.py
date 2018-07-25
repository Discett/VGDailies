from django.contrib import admin
from .models import User
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['username','password']}),
    ]

admin.site.register(User,UserAdmin)
