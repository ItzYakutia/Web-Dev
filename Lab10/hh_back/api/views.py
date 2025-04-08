from django.http import Http404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company, Vacancy
from .serializers import (
    CompanySerializer,  # basic 
    CompanyModelSerializer,  # 
    VacancySerializer,  # Basic Serializer
    VacancyModelSerializer  # ModelSerializer
)

# ======================
# FUNCTION-BASED VIEWS
# ======================

# COMPANY VIEWS (using serializers.Serializer)
@api_view(['GET', 'POST'])
def company_list(request):
    """List all companies or create a new one"""
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    """Retrieve, update or delete a company"""
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# VACANCY VIEWS (using serializers.Serializer)
@api_view(['GET', 'POST'])
def vacancy_list(request):
    """List all vacancies or create a new one"""
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, pk):
    """Retrieve, update or delete a vacancy"""
    try:
        vacancy = Vacancy.objects.get(pk=pk)
    except Vacancy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# ======================
# CLASS-BASED VIEWS
# ======================

# COMPANY VIEWS (using serializers.ModelSerializer)
class CompanyListAPIView(APIView):
    """List all companies or create a new one (ModelSerializer)"""
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):
    """Retrieve, update or delete a company (ModelSerializer)"""
    def get_object(self, pk):
        try:
            return Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanyModelSerializer(company)
        return Response(serializer.data)

    def put(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanyModelSerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        company = self.get_object(pk)
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# VACANCY VIEWS (using serializers.ModelSerializer)
class VacancyListAPIView(APIView):
    """List all vacancies or create a new one (ModelSerializer)"""
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailAPIView(APIView):
    """Retrieve, update or delete a vacancy (ModelSerializer)"""
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancyModelSerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancyModelSerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# ======================
# SPECIAL ENDPOINTS
# ======================

@api_view(['GET'])
def company_vacancies(request, company_id):
    """List all vacancies for a specific company"""
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancyModelSerializer(vacancies, many=True)
    return Response(serializer.data)

class TopTenVacanciesAPIView(APIView):
    """List top 10 vacancies by salary"""
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)