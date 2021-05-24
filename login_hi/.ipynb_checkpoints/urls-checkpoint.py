from django.urls import path
from . import views


#urls of Hindi
urlpatterns = [
    path('', views.index_hi),
    path('profile/',views.profile),
    path('signup/', views.signup),
    path('logout/',views.logout,name="log_hi"),
    path('profiles/', views.signCompleted),
    path('profile/charity/', views.charity),
    path('profile/stat/', views.stat),
    path('profile/quarantine/', views.quarantine),
    path('profile/maps/', views.maps),
    path('profile/final/' ,views.final),
]


