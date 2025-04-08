from django.urls import path

from .views import CarCategoryDetail, CarCategoryList, CarsByCategoryList

app_name = 'api'

urlpatterns = [
    path('categories/', CarCategoryList.as_view()),
    path('categories/<int:id>/', CarCategoryDetail.as_view()),
    path('categories/<int:id>/cars/', CarsByCategoryList.as_view()),
]
