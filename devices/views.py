from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import render
from .serializers import DeviceSerializer
from .models import Device

# Create your views here.
class DeviceView(ModelViewSet):
  serializer_class = DeviceSerializer
  queryset = Device.objects.all()
  
  def get_queryset(self):
    queryset = super().get_queryset()
    map_id = self.request.query_params.get('map')

    if map_id:
      queryset = queryset.filter(map_id=map_id)

    return queryset