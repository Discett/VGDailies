from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    #needed for each view, represents content of page loaded
    return HttpResponse("")
