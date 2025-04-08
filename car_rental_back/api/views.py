from rest_framework import generics
from .models import Car, CarCategory
from .serializers import CarCategorySer, CarSer
# Create your views here.

class CarCategoryList(generics.ListAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySer

class CarCategoryDetail(generics.RetrieveAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySer
    lookup_field = 'id'

class CarsByCategoryList(generics.ListAPIView):
    serializer_class = CarSer
    
    def get_queryset(self):
        category_id = self.kwargs['id']
        return Car.objects.filter(category_id=category_id)
