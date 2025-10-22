from django.db import models

# Create your models here.
class Crop(models.Model):
  name = models.CharField(max_length=50)
  color = models.JSONField(default=list) 
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return f"{self.name}"