from django.urls import path
from monte_seu_time import views

app_name = 'monte_seu_time'

urlpatterns = [
    path('', views.monte_seu_time, name = 'home')
]
