from rest_framework.viewsets import ModelViewSet
from .models import Crop
from .serializers import CropSerializer

class CropView(ModelViewSet):
    queryset = Crop.objects.all().order_by("-updated_at")
    serializer_class = CropSerializer