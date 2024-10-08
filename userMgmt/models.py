from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.hashers import make_password

class AppUserManager(BaseUserManager):

    def create_user(self, username, email, password):
        if not username:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('Users must have a password')
        
        
        
        user = self.model(
            username=username,
            email=self.normalize_email(email),
            # user.set_password(password),
            password=password,
            # sex=sex
        )
        print(password)
        user.save()
        # password = make_password(password)
        return user

    def create_superuser(self, username, email, password=None): 
        # self.sex = "male"
        user = self.create_user(
            username,email,
            password=password,
        )

        user.is_admin = True
        user.save()
        return user

class AppUser(AbstractBaseUser, PermissionsMixin):
    # sex_choices = [
    #     ('male', 'Male'),
    #     ('female', 'Female'),
    # ]

    
    u_id = models.BigAutoField(primary_key=True,editable=False)
    # user_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=40, unique=True)
    password = models.CharField(max_length=3300, blank=False,)
    profileImage = models.ImageField(upload_to='pfp_imgs', null=True,blank=True)
    # sex = models.CharField(max_length=10, choices=sex_choices, default='male')
    # user_type = models.CharField(max_length=10, choices=role_choices, null=False, default="Student")
    created_at = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'sex']
    
    def is_staff(self):
        return self.is_admin

    objects = AppUserManager()

    def __str__(self):
        return self.username
    
class Course(models.Model):
    name = models.CharField(max_length=200, null=True)
    price =models.FloatField(null=True)
    category =  models.CharField(max_length=200)
    description = models.TextField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True)    

    class Meta:
        db_table = 'Course'
        ordering= ['-date_created']
    
    def __str__(self):
        return self.name    