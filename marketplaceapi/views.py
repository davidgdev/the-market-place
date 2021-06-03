from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .serializers import UsersSerializer

from django.core.serializers.json import DjangoJSONEncoder



# Create your views here.
class UserList(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)
    # return HttpResponse('Working')