from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, redirect
from userMgmt.models import *
from .forms import SignupForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate

# rest_framework imports
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, UserLoginSerializer, UserRegisterSerializer
from rest_framework import status, permissions

###########################api views ##############################
from rest_framework.generics import RetrieveUpdateDestroyAPIView
# from django.contrib.auth.models import User

class UserRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create_user(data=request.data)
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validate(data=request.data)
            json = serializer.data
            login(request, user)
            return Response(json, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 

class logoutView(APIView):
    def post(self, request, format=None):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

class profileView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (SessionAuthentication, )
    def get(self, request, format=None):
        json = UserSerializer(request.user).data
        return Response(json, status=status.HTTP_200_OK)


def index(request):
    template = loader.get_template('index1.html')
    # path = {'img_path':"skillUp\home\img", }
    return HttpResponse(template.render() )






##############################template views ##############################
# def reg(request):
#     template = loader.get_template('landing/register.html')
#     return HttpResponse(template.render())

# def userReg(request):
#     registered = False
#     # form = UserCreationForm()
#     if request.method=="POST":
#         form = SignupForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             user.password = make_password('password')
#             User.save(user)
#             registered = True
#             login(User)
#             return redirect('index')
#         else:
#             print(form.errors)
#     else:
#         form = SignupForm()

#     context = {'form':form, 'registered':registered}
#     return render(request,'signup.html', context)


# def user_login(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         user = authenticate(username=username, password=password)
#         if user:
#             if user.is_active():
#                 # login(request, user)
#                 return HttpResponseRedirect('index')
#             else:
#                 HttpResponse("ACCOUNT NOT ACTIVE")
#         else:
#             print("not a user trying to login")
#             return HttpResponse("INVALID LOGIN DETAILS")
#     else:
#         return render(request, 'login.html', {})
