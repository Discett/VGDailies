from django.shortcuts import render
from django.http import HttpResponse
from homepage.models import user

# Create your views here.
def index(request):
    #needed for each view, represents content of page loaded
    return HttpResponse("Got off the internet nerd")
    #return render(request, 'homepage/index.html', {'user': user.username})

#validates registration data
def register(request):
    return HttpResponse("Reg page")
