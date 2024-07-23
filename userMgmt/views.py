from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, redirect
from userMgmt.models import *
from .forms import SignupForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate


# Create your views here.



def index(request):
    template = loader.get_template('index1.html')
    # path = {'img_path':"skillUp\home\img", }
    return HttpResponse(template.render() )

# def reg(request):
#     template = loader.get_template('landing/register.html')
#     return HttpResponse(template.render())

def userReg(request):
    registered = False
    # form = UserCreationForm()
    if request.method=="POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.password = make_password('password')
            User.save(user)
            registered = True
            login(User)
            return redirect('index')
        else:
            print(form.errors)
    else:
        form = SignupForm()

    context = {'form':form, 'registered':registered}
    return render(request,'signup.html', context)


def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)
        if user:
            if user.is_active():
                # login(request, user)
                return HttpResponseRedirect('index')
            else:
                HttpResponse("ACCOUNT NOT ACTIVE")
        else:
            print("not a user trying to login")
            return HttpResponse("INVALID LOGIN DETAILS")
    else:
        return render(request, 'login.html', {})
