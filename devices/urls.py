from django.urls import path
# from rest_framework import routers
from .views import devices_by_map, devices, device_id

# router = routers.DefaultRouter()
# router.register(r"devices", DeviceView, basename="devices")

urlpatterns = [
  path("", devices, name="devices"),
  path("<int:device_id>/", device_id, name="devices_id"),
  path("map/<int:map_id>/", devices_by_map, name="devices_by_map"),
]