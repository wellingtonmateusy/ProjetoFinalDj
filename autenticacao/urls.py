from django.urls import path
from autenticacao import views

app_name = 'autenticacao'

urlpatterns = [
    path('', views.autenticacao, name = 'home'),
    path('login/', views.login, name = 'login'),
    path('cadastro/', views.cadastro, name = 'cadastro'),
]
