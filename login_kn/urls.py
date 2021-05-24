##urls for kannada
from django.urls import path
from . import views



urlpatterns = [
    path("",views.index),
    path("profile/", views.profile),
    path("signUp/", views.signUp),
    path("logout/",views.logout, name="log_kn"),
    path("profiles/",views.signCompleted),
    path("profile/charity/", views.charity),
    path("profile/quarantine/", views.quarantine),
    path("profile/maps/", views.maps),
    path("profile/final/", views.final),
]
