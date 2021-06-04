from django.conf.urls import url
from django.contrib import admin
from django.contrib.admin.sites import site
from rest_framework.urlpatterns import format_suffix_patterns
# from django.urls import path
from marketplaceapi import views



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^users/', views.UserList.as_view()),
    url(r'^categorys/', views.CategoryList.as_view()),
    url(r'^productsList/', views.ProductsList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
