from django.db import models

# Create your models here.
class Buys(models.Model):
    id_b = models.AutoField(primary_key=True)
    user_seller = models.IntegerField()
    user_buyer = models.IntegerField()
    product_b_fk = models.ForeignKey('Products', models.DO_NOTHING, db_column='product_b_fk')
    payment_fk = models.ForeignKey('Payments', models.DO_NOTHING, db_column='payment_fk')

    class Meta:
        managed = False
        db_table = 'buys'


class Categorys(models.Model):
    id_c = models.AutoField(primary_key=True)
    name_c = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'categorys'
    def __str__(self):
        return self.id_c


class Images(models.Model):
    id_i = models.AutoField(primary_key=True)
    route = models.CharField(max_length=200)
    product_i_fk = models.ForeignKey('Products', models.DO_NOTHING, db_column='product_i_fk')

    class Meta:
        managed = False
        db_table = 'images'


class Payments(models.Model):
    id_pa = models.AutoField(primary_key=True)
    name_pa = models.CharField(max_length=200)
    type_pa = models.CharField(max_length=220)
    quantity = models.IntegerField()
    total = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'payments'


class Products(models.Model):
    id_p = models.AutoField(primary_key=True)
    name_p = models.CharField(max_length=200)
    description_p = models.CharField(max_length=200)
    sku = models.IntegerField()
    price = models.FloatField()
    stock = models.IntegerField()
    able = models.IntegerField()
    user_fk = models.IntegerField()
    category_fk = models.ForeignKey(Categorys, models.DO_NOTHING, db_column='category_fk')

    class Meta:
        managed = False
        db_table = 'products'


class Rols(models.Model):
    id_r = models.AutoField(primary_key=True)
    name_r = models.CharField(max_length=200)
    description_r = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'rols'


class Users(models.Model):
    id_u = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'users'
    
    def __str__(self):
        return self.id_u


class UsersProducts(models.Model):
    id_u_p = models.IntegerField()
    user_fk = models.ForeignKey(Users, models.DO_NOTHING, db_column='user_fk')
    product_fk = models.ForeignKey(Products, models.DO_NOTHING, db_column='product_fk')

    class Meta:
        managed = False
        db_table = 'users_products'


class UsersRols(models.Model):
    id_u_r = models.AutoField(primary_key=True)
    rol_u_r_fk = models.ForeignKey(Rols, models.DO_NOTHING, db_column='rol_u_r_fk')
    user_r_fk = models.ForeignKey(Users, models.DO_NOTHING, db_column='user_r_fk')

    class Meta:
        managed = False
        db_table = 'users_rols'