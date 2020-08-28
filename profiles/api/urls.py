from django.urls import path
from . import views

urlpatterns = [
    path('<str:username>/follow/', views.user_follow_view),
]
