from django.urls import path
from campeonatos import views

app_name = 'campeonatos'

urlpatterns = [
    path('', views.campeonatos, name = 'home'),
    # path('tabela/', views.tabela, name = 'tabela'),
]
