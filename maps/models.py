from django.db import models

# Model representing a geographical map
class Map(models.Model):
  name = models.CharField(max_length=100)
  center = models.CharField(max_length=50)  # e.g., "latitude,longitude"
  zoom = models.IntegerField(default=10)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return f"{self.name} - {self.updated_at.strftime('%Y-%m-%d')}"