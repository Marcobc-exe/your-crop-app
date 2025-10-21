from rest_framework import viewsets
from .serializer import MapSerializer
from .models import Map

# Create your views here.
class MapView(viewsets.ModelViewSet):
  serializer_class = MapSerializer
  queryset = Map.objects.all()