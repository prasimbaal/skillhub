from django.urls import path, include
from . import views


urlpatterns = [
    path("",views.index, name='index'),
    # path("register/", views.reg, name='reg'),
    path("login/", views.login, name='login'),
    path("registration/", views.userReg, name="user"),

]