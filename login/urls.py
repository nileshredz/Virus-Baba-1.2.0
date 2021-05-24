from django.urls import path
from . import views

#english urls
urlpatterns = [
    path('', views.index),
    path(r'signUp/', views.signUp),
    path(r'logout/', views.logout, name="log"),
    path(r'profile/', views.profile),
    path(r'stat/',views.statistics),
    path(r'blood/',views.blood),
    path(r'oxygen/',views.oxygen),
    path(r'profile/maps/' ,views.maps),
    path(r'profile/final/', views.final),
    path(r'profile/qr/', views.qr_code),
    path(r'profile/stat/',views.pro_stat),
    path(r'profiles/',views.signCompleted),
    path(r'profile/charity/', views.charity),
    path(r'profile/quarantine/', views.quarantine),
    path(r'profile/hospital/', views.hospital),
    path(r'profile/blood/',views.bloodlog),
    path(r'profile/oxygen/',views.oxygenlog),
    
    


]
