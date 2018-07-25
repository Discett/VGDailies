from django.http import HttpResponse
#remove if we decide to use CSRF
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    if request.method == 'POST':
        return HttpResponse("Hello, world. You're at the login post index.")
    elif request.method == 'GET':
        return HttpResponse("Hello, world. You're at the login get index.")
