from rest_framework import serializers
from .models import Users, Categorys, Products


class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id_u','first_name','last_name','email')
        # fields = '__all__'


class CategorysSerializer(serializers.ModelSerializer):
            
    class Meta:
        model = Categorys
        fields = ('id_c','name_c')


class ProductsSerializer(serializers.ModelSerializer):    
    category_fk = serializers.StringRelatedField()

    class Meta:
        model = Products
        # fields = ('id_p','name_p','description_p','price','sku','stock','able','user_fk','category_fk')
        fields= "__all__"

class ProductsInsertSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        # fields = ('id_p','name_p','description_p','price','sku','stock','able','user_fk','category_fk')
        fields= "__all__"

    
class CategorysAndProducts(serializers.ModelSerializer):    

    class Meta:        
        model = Products
        fields = '__all__'
    
    def to_representation(self, instance):
        
        return {            
            'category': instance.category_fk.name_c,
            'product id': instance.id_p,
            'product': instance.name_p,
            'description': instance.description_p,
            'sku': instance.sku,
            'price': instance.price,
            'stock': instance.stock,
            'able': instance.able
        }
