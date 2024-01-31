from django.urls import path
from partidas import views

app_name = 'partidas'

urlpatterns = [
    path('', views.partidas, name = 'home')
]
