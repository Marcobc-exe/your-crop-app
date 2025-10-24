from django.urls import path
from .views import areas_by_map, areas_by_irrigation_and_map, areas_by_failure_and_map, areas_by_crop_and_map, areas_by_sector_by_device_and_map, areas_irrigating_by_device_and_map, areas_irrigating_by_map_device_sector, areas_by_device_and_map, areas_failing_by_map_device_sector, areas_crops_by_map_device_sector


urlpatterns = [
  path('map/<int:map_id>/', areas_by_map, name='areas_by_map'),
  path('map/<int:map_id>/irrigating/<str:is_irrigating>/', areas_by_irrigation_and_map, name='areas_by_irrigation_and_map'),
  path('map/<int:map_id>/failure/<str:failure>/', areas_by_failure_and_map, name='areas_by_failure_and_map'),
  path('map/<int:map_id>/crop/<int:crop_id>/', areas_by_crop_and_map, name='areas_by_crop_and_map'),
  path('map/<int:map_id>/device/<int:device_id>/', areas_by_device_and_map, name='areas_by_device_and_map'),
  path('map/<int:map_id>/device/<int:device_id>/sector/<int:sector>/', areas_by_sector_by_device_and_map, name='areas_by_sector_and_map'),
  path('map/<int:map_id>/device/<int:device_id>/irrigating/<str:is_irrigating>/', areas_irrigating_by_device_and_map, name='areas_irrigating_by_device_and_map'),
  path('map/<int:map_id>/device/<int:device_id>/sector/<int:sector>/irrigating/<str:is_irrigating>/', areas_irrigating_by_map_device_sector, name='areas_irrigating_by_sector_and_map'),
  path('map/<int:map_id>/device/<int:device>/sector/<int:sector>/failure/<str:failure>/', areas_failing_by_map_device_sector, name='areas_failing_by_map_device_sector'),
  path('map/<int:map_id>/device/<int:device>/sector/<int:sector>/crop/<str:crop_id>/', areas_crops_by_map_device_sector, name='areas_crops_by_map_device_sector'),
]