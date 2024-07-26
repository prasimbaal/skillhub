from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
UserModel = User
sex_choices = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

role_choices = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
    ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class UserRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'user_type', 'sex']

    def create_user(self, validated_data):
        password = make_password(validated_data.pop('password'))  #plaintext password removed from dictionary
        user = User.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            user_type=validated_data['user_type'], 
            sex=validated_data['sex']   
        )
        return user

    

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(
            username=data['username'],
            password=make_password(data['password'])
        )
        if user:
            return user
        raise serializers.ValidationError("Incorrect Credentials")