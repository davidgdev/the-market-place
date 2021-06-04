from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Products, Users, Categorys
from .serializers import CategorysSerializer, ProductsSerializer, UsersSerializer

from django.core.serializers.json import DjangoJSONEncoder



# Create your views here.
class UserList(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)
    # return HttpResponse('Working')


class CategoryList(APIView):
    def post(self,request):
        name_c = CategorysSerializer(data=request.data)        
        if name_c.is_valid():
            name_c.save()
        return Response(name_c,status=status.HTTP_201_CREATED)


class ProductsList(APIView):
    def get(self,request):
        products = Products.objects.all()
        serializer = ProductsSerializer(products,many=True)
        return Response(serializer.data)

