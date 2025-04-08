from rest_framework import serializers
from .models import Company, Vacancy

# basic Serializer
class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()
    
    def create(self, validated_data):
        return Company.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

# ModelSerializer 
class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

# basic Serializer for Vacancy 
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    
    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance

# ModelSerializer for Vacancy 
class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']