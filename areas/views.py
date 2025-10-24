from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AreaSerializer
from .models import Area

# Areas by map
@api_view(['GET'])
def areas_by_map(request, map_id: int):
  areas = Area.objects.filter(map_id=map_id)
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas irrigating by map 
@api_view(['GET'])
def areas_by_irrigation_and_map(request, map_id: int, is_irrigating: str):
  areas = Area.objects.filter(map_id=map_id, irrigating=bool(is_irrigating))
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas of a device by map
@api_view(['GET'])
def areas_by_device_and_map(request, map_id: int, device_id: int):
  areas = Area.objects.filter(map_id=map_id, device_id=device_id)
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas failing by map
@api_view(['GET'])
def areas_by_failure_and_map(request, map_id: int, failure: str):
  areas = Area.objects.filter(map_id=map_id, failure=bool(failure))
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas by crop and map
@api_view(['GET'])
def areas_by_crop_and_map(request, map_id: int, crop_id: int):
  areas = Area.objects.filter(map_id=map_id, crop_id=crop_id)
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas of device by sector and map
@api_view(['GET'])
def areas_by_sector_by_device_and_map(request, map_id: int, device_id: int, sector: int):
  areas = Area.objects.filter(map_id=map_id, device=device_id, sector=sector)
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas of a device irrigating my map
@api_view(['GET'])
def areas_irrigating_by_device_and_map(request, map_id: int, device_id: int, is_irrigating: str):
  areas = Area.objects.filter(map_id=map_id, device=device_id, irrigating=bool(is_irrigating))
  serialize = AreaSerializer(areas, many=True)
  return Response(serialize.data)

# Areas irrigaiting by sector, device and map
@api_view(['GET'])
def areas_irrigating_by_map_device_sector(request, map_id: int, device_id: int, sector: int, is_irrigating: str):
  areas = Area.objects.filter(map_id=map_id, device=device_id,sector=sector, irrigating=bool(is_irrigating))
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas failing by map, device and sector
@api_view(['GET'])
def areas_failing_by_map_device_sector(request, map_id: int, device: int, sector: int, failure: str):
  areas = Area.objects.filter(map_id=map_id, device=device, sector=sector, failure=bool(failure))
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)

# Areas by crop, device, sector and map
@api_view(['GET'])
def areas_crops_by_map_device_sector(request, map_id: int, device: int, sector: int, crop_id: int):
  areas = Area.objects.filter(map_id=map_id, device=device, sector=sector, crop=crop_id)
  serializer = AreaSerializer(areas, many=True)
  return Response(serializer.data)