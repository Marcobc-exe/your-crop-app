from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Crop
from .serializers import CropSerializer

# class CropView(ModelViewSet):
#     queryset = Crop.objects.all().order_by("-updated_at")
#     serializer_class = CropSerializer

@api_view(["GET"])
def crops(request):
    qs = Crop.objects.all()
    serialize = CropSerializer(qs, many=True)
    return Response(serialize.data)

@api_view(["GET"])
def crop_by_id(request, crop_id: int):
    qs = Crop.objects.filter(id=crop_id)
    serializer = CropSerializer(qs, many=True)
    return Response(serializer.data)