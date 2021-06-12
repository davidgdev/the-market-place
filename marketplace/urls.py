from django.conf.urls import url
from django.contrib import admin
from django.contrib.admin.sites import site
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from marketplaceapi import views



urlpatterns = [

    path('', views.index),

    url(r'^admin/', admin.site.urls),
    url(r'^users', views.UsersList.as_view()),
    url(r'^categories', views.CategoriesList.as_view()),
    url(r'^products', views.ProductsList.as_view()),
    url(r'^cp', views.CategoryAndProducts.as_view()),
    path('product-detail/<int:pk>/', views.ProductDetail.as_view()),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)
