from rest_framework.routers import DefaultRouter
from .views import CropView

router = DefaultRouter()
router.register(r'crops', CropView, basename='crops')

urlpatterns = router.urls