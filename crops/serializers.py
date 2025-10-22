from rest_framework.serializers import ModelSerializer
from .models import Crop

class CropSerializer(ModelSerializer):
  class Meta:
    model = Crop
    fields = "__all__"