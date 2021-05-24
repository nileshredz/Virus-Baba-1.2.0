##views for Marathi
from django.shortcuts import render
from django.http import HttpResponse
import pyrebase
from django.contrib import auth
from firebase import firebase
from firebase_admin import credentials




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

firebase = pyrebase.initialize_app(config);
authe = firebase.auth()
database = firebase.database()
#firebase = firebase.FirebaseApplication('https://virus-baba-or.firebaseio.com/personal/')

def index(request):
    return render(request, 'indexmr.html')


def signUp(request):
    return render(request, 'login_mr.html')

def profile(request): 
    email = request.POST.get("emailLogin_mr")
    passw = request.POST.get("passLogin_mr")
    try:
        user = authe.sign_in_with_email_and_password(email,passw)
    except:
        message = "अचूक संकेतशब्द / ईमेल किंवा दोन्ही प्रविष्ट करा"
        return render(request, 'indexmr.html',{"messgmr":message})
    
    return render(request, 'profile_mr.html')


def charity(request):
    return render(request, 'charity_hi.html')

def quarantine(request):
    return render(request, 'quarantine_hi.html')

def logout(request):
    return render(request, 'indexmr.html')
    
def signCompleted(request):
    email_login =request.POST.get('email1')
    Passwd = request.POST.get('pass1')
    CPassed = request.POST.get('cpass1')
    name = request.POST.get('name1')
    age = request.POST.get('age1')
    gender = request.POST.get('gender1')
    phone = request.POST.get('phone1')
            
    try:
        user=authe.create_user_with_email_and_password(email_login,Passwd)
    except:
        return render(request,'score.html')
   
    uid = user['localId']
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
    return render(request, 'profile_mr.html')

def maps(request):
    return render(request, 'maps_mr.html')

def final(request):
    return render(request, 'final_mr.html')