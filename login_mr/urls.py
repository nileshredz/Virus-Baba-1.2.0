from django.urls import path
from . import views


#marathi urls
urlpatterns = [
    path('', views.index),
    path('profile/', views.profile),
    path('signUp/',views.signUp),
    path('logout/', views.logout,name = 'log_mr'),
    path('profiles/', views.signCompleted),
    path('profile/charity/', views.charity),
    path('profile/quarantine/', views.quarantine),
    path('profile/maps/', views.maps),
    path('profile/final/',views.final),


]
