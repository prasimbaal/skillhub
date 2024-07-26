from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

##api urls
urlpatterns = [
    path("",views.index, name='index'),
    # path("register/", views.reg, name='reg'),
    path("login/", views.UserLoginView.as_view(), name='login'),
    path("registration/", views.UserRegisterView.as_view(), name="register"),
    path("logout/",views.logoutView.as_view(), name = "logout"),
    path("profile/", views.profileView.as_view(), name="profile"),
    # path('api/registraion/', views.profile.as_view())

]


##template urls
# urlpatterns = [
#     path("",views.index, name='index'),
#     # path("register/", views.reg, name='reg'),
#     path("login/", views.user_login, name='login'),
#     path("registration/", views.userReg, name="user"),
#     path("logout/", ),
#     path("profile/")
#     # path('api/registraion/', views.profile.as_view())

# ]

# urlpatterns = format_suffix_patterns(urlpatterns)


