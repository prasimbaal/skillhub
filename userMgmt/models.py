from django.db import models

# Create your models here.
# from django.contrib.auth.models import User

# import uuid
# Create your models here.

class User(models.Model):
    
    sex_choices = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    role_choices = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
    ]

    u_id = models.BigAutoField(primary_key=True,editable=False)
    # user_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=40)
    password = models.CharField(max_length=3300, blank=False,)
    profileImage = models.ImageField(upload_to='pfp_imgs', null=True,blank=True)
    sex = models.CharField(max_length=10, choices=sex_choices, null=True, default='male')
    user_type = models.CharField(max_length=10, choices=role_choices, null=False, default="Student")
    created_at = models.DateTimeField(auto_now_add=True)    
    is_anonymous = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

    def create_user(self, username, email, password, user_type, sex):
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            user_type=user_type,
            sex=sex
        )
        return user

        
    class Meta:
        db_table = 'User'
        ordering = ['-created_at']
    USERNAME_FIELD = 'username'    
    REQUIRED_FIELDS = ['email', 'password', 'user_type', 'sex']

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
