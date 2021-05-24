#views of English
from django.shortcuts import render
from django.http import HttpResponse
import pyrebase
from django.contrib import auth
from firebase import firebase
from firebase_admin import credentials
#import firebase_admin
#from firebase_admin import auth as f_admin




config = {

    'apiKey': "AIzaSyDceypGOt8a6g-gVAvp0Zdcj1otpnhoy5M",
    'authDomain': "virus-baba-or.firebaseapp.com",
    'databaseURL': "https://virus-baba-or.firebaseio.com",
    'projectId': "virus-baba-or",
    'storageBucket': "virus-baba-or.appspot.com",
    'messagingSenderId': "737792231185",
    'appId': "1:737792231185:web:323bced20b6019c1a42eb0",
    'measurementId': "G-RQTTC8L0Y4"

}

firebase1 = pyrebase.initialize_app(config);
authe = firebase1.auth()
cred = credentials.Certificate('./login/virus-baba-or-firebase-adminsdk-xibio-280817c31a.json')


database = firebase1.database()
firebase = firebase.FirebaseApplication('https://virus-baba-or.firebaseio.com/personal/')

def index(request):
    return render(request, 'index.html')


def signUp(request):
    return render(request, 'login.html')

def charity(request):
    return render(request, 'charity.html')

def quarantine(request):
    uid = user['localId']
    name = firebase.get(uid,'name')
    age = firebase.get(uid,'age')
    gender = firebase.get(uid,'gender')
    email = firebase.get(uid,'email')
    phone = firebase.get(uid,'phone')
    print(phone)
    print(name,age)
    return render(request, 'quarantine.html',{'name':name,'age':age,"gender":gender,"email":email,"phone_number":phone})

def pro_stat(request):
    return render(request, 'stat_pro.html')

def profile(request): 
    email = request.POST.get("emailLogin")
    passw = request.POST.get("passLogin")
    
    
    try:
        global user
        user = authe.sign_in_with_email_and_password(email,passw)
    except:
        message="Enter Correct Password/Email or both"
        
        return render(request, 'index.html',{"messg":message})
    
    #name = firebase.get(user['localId'],'name')
    session_id = user['idToken']
    request.session['uid'] = str(session_id)
    print(user['localId'])   
    return render(request, 'profile.html',user)

def signCompleted(request):
    email_login =request.POST.get('email1')
    Passwd = request.POST.get('pass1')
    CPassed = request.POST.get('cpass1')
    name = request.POST.get('name1')
    age = request.POST.get('age1')
    gender = request.POST.get('gender1')
    phone = request.POST.get('phone1')
            
    try:
        user_sign =authe.create_user_with_email_and_password(email_login,Passwd)
    except:
        return render(request,'score.html')
   
    
    uid = user_sign['localId']
    print(uid)
    
    data = {
           
            "userId":uid,
            "name":name,
            "age":age,
            "gender":gender,
            "phone":phone,
            "email":email_login
        
            }
    
            
    result = database.child('personal').child(uid).set(data)
    
    print(result)
    return render(request, 'profile.html')
        
    
def qr_code(request):
    code = request.POST.get('data')
    #print(demo)
    print(user['localId'])
    return render(request, 'qr_code.html')
     
def logout(request):
    auth.logout(request)
    return render(request, 'index.html')
    
def statistics(request):
    return render(request, 'stat.html')

def scores(request):
    return render(request, 'score.html')

def hospital(request):
    return render(request, 'hospital.html')

def maps(request):
    uid_n = user['localId']
    name = firebase.get(uid_n,'name')
    age = firebase.get(uid_n,'age')
    gender = firebase.get(uid_n,'gender')
    email = firebase.get(uid_n,'email')
    phone = firebase.get(uid_n,'phone')
    
    return render(request, 'map.html',{'name':name,'age':age,"gender":gender,"email":email,"phone_number":phone})


def blood(request):
    return render(request,'blood.html')

def oxygen(request):
    return render(request,'oxygen.html')

def bloodlog(request):
    return render(request, "blood_pro.html")

def oxygenlog(request):
    return render(request, "oxygen_pro.html")


def final(request):
    return render(request, 'final.html')




