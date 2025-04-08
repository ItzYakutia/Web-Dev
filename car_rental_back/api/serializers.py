from rest_framework import serializers
from .models import Car, CarCategory

class CarCategorySer(serializers.ModelSerializer):
    class Meta:
        model = CarCategory
        fields = ['id', 'name']

class CarSer(serializers.ModelSerializer):
    category = CarCategorySer()
    
    class Meta:
        model = Car
        fields = '__all__'
