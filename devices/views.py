from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import DeviceSerializer
from .models import Device

# # Create your views here.
# class DeviceView(ModelViewSet):
#   serializer_class = DeviceSerializer
#   queryset = Device.objects.all()
  
#   # /devices/?map=123
#   def get_queryset(self):
#     queryset = super().get_queryset()
#     map_id = self.request.query_params.get('map')

#     if map_id:
#       queryset = queryset.filter(map_id=map_id)

#     return queryset

@api_view(["GET"])
def devices(request):
  qs = Device.objects.all()
  serializer = DeviceSerializer(qs, many=True)
  return Response(serializer.data)

@api_view(["GET"])
def device_id(request, device_id: int):
  qs = Device.objects.filter(id=device_id)
  serializer = DeviceSerializer(qs, many=True)
  return Response(serializer.data)
  
@api_view(["GET"])
def devices_by_map(request, map_id: int):
  qs = Device.objects.filter(map_id=map_id)  # si tu FK es map_id
  serializer = DeviceSerializer(qs, many=True)
  return Response(serializer.data)