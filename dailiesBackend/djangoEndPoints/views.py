from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from django.views import generic
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
#from djangoEndPoints.serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.conf import settings
from rest_framework.authtoken.models import Token
import json



@csrf_exempt
#gotta work on this one a bit
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
            #!!! before working with redirects fix how you send your post!
            #return redirect('/polls/',request)
            return HttpResponse(token)
    #return redirect(settings.LOGIN_URL, request)
    #return a redirect instead of a response!
    return HttpResponse('incorrect username or password')

#These need to set the view in react not django!
def logout_user(request):
    return render(request, 'account/logout.html', {})

def login_form(request):
    return render(request, 'account/login.html', {})
