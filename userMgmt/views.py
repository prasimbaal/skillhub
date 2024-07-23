from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect
from userMgmt.models import *
from .forms import SignupForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth import login

# Create your views here.



def index(request):
    template = loader.get_template('index1.html')
    # path = {'img_path':"skillUp\home\img", }
    return HttpResponse(template.render() )

# def reg(request):
#     template = loader.get_template('landing/register.html')
#     return HttpResponse(template.render())

def userReg(request):
    # form = UserCreationForm()
    if request.method=="POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            User = form.save()
            login(User)
            return redirect('index')
    else:
        form = SignupForm()

    context = {'form':form}
    return render(request,'signup.html', context)


def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())

