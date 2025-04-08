from django.urls import path
from . import views

urlpatterns = [
    # Function-based views (using Serializer)
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    
    # Class-based views (using ModelSerializer)
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view()),
]