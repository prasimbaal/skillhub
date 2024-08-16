from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password



UserModel = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
      required=True,) 
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    class Meta:
        model = UserModel
        fields = ('username', 'password','email','user_type', 'sex')
     
    
    def create_user(self, data):
        password = make_password(data['password'])  #plaintext password removed from dictionary
        print(password)
        user_obj = UserModel.objects.create_user(username = data['username'], email=data['email'], user_type = data['user_type'], sex = data['sex'], password=password)
        user_obj.save()
        
        return user_obj

    

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        passwd = data.get('password')
        password = make_password(passwd)
        print(password, passwd)
        # password = passwd

        if not username or not password:
            raise serializers.ValidationError("Must include 'username' and 'password'")

        # Check if user exists
        if not AppUser.objects.filter(username=username).exists():
            raise serializers.ValidationError("User with this username does not exist")

        # Authenticate the user
        user = UserModel.objects.get(username=username)
        # user = authenticate(username=username, password=password)
        
        if not user.check_password(passwd):
            raise serializers.ValidationError(f"Incorrect credentials USERNAME: {username}, \n PASSWORD BEFORE HASHING: {passwd} \n PASSWORD AFTER HASHING:{password}")

        return user

    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"
