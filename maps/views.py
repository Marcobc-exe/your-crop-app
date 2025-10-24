from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import MapSerializer
from .models import Map
  
@api_view(["GET"])
def maps(request):
  qs = Map.objects.all()
  serializer = MapSerializer(qs, many=True)
  return Response(serializer.data)

@api_view(["GET"])
def map_id(request, map_id: int):
  qs = Map.objects.filter(id=map_id)
  serializer = MapSerializer(qs, many=True)
  return Response(serializer.data)
