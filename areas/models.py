from django.db import models

# Create your models here.
class Area(models.Model):
  map = models.ForeignKey(
    'maps.Map',
    on_delete=models.CASCADE,
    related_name='areas'
  )
  crop = models.ForeignKey(
    'crops.Crop',
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='areas'
  )
  device_name = models.CharField(blank=True, max_length=100)
  device = models.IntegerField(null=True)
  sector = models.IntegerField(blank=True, null=True)
  irrigating = models.BooleanField(default=False)
  failure = models.BooleanField(default=False)
  coordinates = models.JSONField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return f"Sector {self.sector} - {self.device_name} ({self.device})"