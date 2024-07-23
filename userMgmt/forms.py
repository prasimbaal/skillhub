from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User
from userMgmt.models import User

class SignupForm(ModelForm):
    
    sex_choices = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    role_choices = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
    ]
    
    
    password = forms.CharField(widget=forms.PasswordInput())
    fullname = forms.CharField(max_length=70, required=True)
    username = forms.CharField(max_length=20, required=True)
    email = forms.EmailField()
    sex = forms.CharField(widget=forms.Select(choices=sex_choices))
    user_type = forms.ChoiceField(choices=role_choices)
    
    class Meta():
        model = User
        fields = ('username', 'email', 'password','sex','user_type')
        