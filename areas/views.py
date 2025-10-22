from rest_framework.viewsets import ModelViewSet
from .serializers import AreaSerializer
from .models import Area

# Create your views here.
class AreaView(ModelViewSet):
  serializer_class = AreaSerializer
  queryset = Area.objects.all()