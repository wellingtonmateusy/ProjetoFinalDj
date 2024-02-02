from django.urls import path
from campeonatos import views

app_name = 'campeonatos'

urlpatterns = [
    path('', views.campeonatos, name = 'home'),
    path('CBLOL2024_1Split/', views.cblol, name = 'cblol'),
    path('LPL2024_1Split/', views.lpl, name = 'lpl'),
    path('LCK2024_1Split/', views.lck, name = 'lck'),
    path('LCS2024_1Split/', views.lcs, name = 'lcs'),
    path('LEC2024_1Split/', views.lec, name = 'lec'),
    path('LLA2024_1Split/', views.lla, name = 'lla'),
]
