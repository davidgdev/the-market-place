from django.http import HttpResponse, JsonResponse

# from .models import Users


from django.core.serializers.json import DjangoJSONEncoder



# Create your views here.
def products(request):
    return HttpResponse('Working')