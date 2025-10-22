from rest_framework.routers import DefaultRouter
from .views import DeviceView

router = DefaultRouter()
router.register(r"devices", DeviceView, basename="devices")

urlpatterns = router.urls