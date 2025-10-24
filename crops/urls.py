from django.urls import path
from .views import crops, crop_by_id

urlpatterns = [
  path('', crops, name='crops'),
  path('<int:crop_id>/', crop_by_id, name='crop_by_id'),
]