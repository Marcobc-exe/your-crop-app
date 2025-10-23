from django.db import models

# Create your models here.
class Device(models.Model):
  map_id = models.ForeignKey(
    'maps.Map',
    on_delete=models.CASCADE,
    related_name='devices'
  )
  name = models.CharField(max_length=100)
  device_num = models.IntegerField(null=True)
  lon = models.FloatField()
  lat = models.FloatField()
  connected = models.BooleanField(default=False)
  failure = models.BooleanField(default=False)
  irrigating = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return f"{self.name}"