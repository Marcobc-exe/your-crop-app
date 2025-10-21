from django.urls import path, include
from rest_framework import routers
from .views import MapView

router = routers.DefaultRouter()
router.register(r'maps', MapView, 'maps')

# api versioning
urlpatterns = [
  path('api/v1/', include(router.urls))
]