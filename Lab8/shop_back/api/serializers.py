from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'count', 'is_active', 'category']

    def create(self, validated_data):
        category_data = validated_data.pop('category')
        
        category, _ = Category.objects.get_or_create(**category_data)
        
        product = Product.objects.create(category=category, **validated_data)
        
        return product