from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from django.views import generic
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.conf import settings
from rest_framework.authtoken.models import Token
import json
from rest_framework.renderers import JSONRenderer
from django.core import serializers
#from djangoEndPoints.serializers import DailiesSerializer
from djangoEndPoints.models import dailies

@csrf_exempt
#python works by spacing not brackets
def get_auth_token(request):
    #this is because AXIOS sends request in as default in JSON so we need to decode
    try:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        username = body_data['userSubmittedUsername']
        password = body_data['userSubmittedPassword']
    #for other general purpose POST requsts eg. not JSON.
    except:
        username = request.POST.get('userSubmittedUsername')
        password = request.POST.get('userSubmittedPassword')
    user = authenticate(username = username, password = password)
    if user is not None:
        if user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key
            return HttpResponse(token)
    return HttpResponse('incorrect username or password')

def logout_user(request):
    return render(request, 'account/logout.html',{})

def login_form(request):
    return render(request, 'account/login.html',{})

@csrf_exempt
def addUserDaily(request):
    #try to get information from json from website
    try:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        username = body_data['username']
        token =     body_data['token']
        title =     body_data['title']
        resetTime = body_data['resetTime']
    #this is for testing purposes
    except:
        username    = request.POST.get('username')
        token       = request.POST.get('token')
        title       = request.POST.get('title')
        resetTime   = request.POST.get('resetTime')
    #if it these fields are not empty then check authentication
    if token and username is not None:
        try:
            userObject = User.objects.get(username=username)
            tokenObject  = Token.objects.get(key=token)
        except:
            return HttpResponse('error with authentication')
        #checks auth
        if tokenObject.user_id == userObject.id:
            #checks if title already exists for user
            if dailies.objects.filter(userid = tokenObject.user_id).filter(title = title).exists():
                return HttpResponse('exists')
            add = dailies(userid = userObject.id, title = title, resetTime = resetTime)
            add.save()
            return HttpResponse('add')
        return HttpResponse('error with authentication')
    return HttpResponse('error with authentication')

@csrf_exempt
def removeUserDaily(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        username = body_data['username']
        token = body_data['token']
        title = body_data['title']
    except:
        username = request.POST.get('username')
        token = request.POST.get('token')
        title = request.POST.get('title')
    if token and username is not None:
        try:
            userObject = User.objects.get(username=username)
            tokenObject  = Token.objects.get(key=token)
        except:
            return HttpResponse('error with authentication')
        if tokenObject.user_id == userObject.id:
            dailies.objects.filter(userid = tokenObject.user_id).filter(title = title).delete()
            return HttpResponse('remove')
        return HttpResponse('error with authentication')
    return HttpResponse('error with authentication')

@csrf_exempt
def getUserDailies(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        username = body_data['username']
        token = body_data['token']
    except:
        username = request.POST.get('username')
        token = request.POST.get('token')
    if token and username is not None:
        try:
            userObject = User.objects.get(username=username)
            tokenObject  = Token.objects.get(key=token)
        except:
            return HttpResponse('error with authentication')
        if tokenObject.user_id == userObject.id:
            dailiesObject = dailies.objects.filter(userid = tokenObject.user_id)
            data = serializers.serialize('json',dailiesObject, fields = ('title','reset','resetTime'))
            #return JsonResponse(json.dumps(data, ensure_ascii=False), safe=False)
            #return JsonResponse(data, safe=False)
            return HttpResponse(data, content_type="application/json")
        return HttpResponse('error with authentication')
    return HttpResponse('error with authentication')
