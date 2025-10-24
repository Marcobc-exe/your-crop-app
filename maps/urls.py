from django.urls import path
from .views import maps, map_id

# api versioning
urlpatterns = [
  path('', maps, name='maps'),
  path('<int:map_id>/', map_id, name='map_id'),
]