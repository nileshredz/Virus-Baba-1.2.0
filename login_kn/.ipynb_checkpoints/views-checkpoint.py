##views for kannda
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
    return render(request, 'index_kn.html')


def signUp(request):
    return render(request, 'login_kn.html')

def profile(request):
    email = request.POST.get("emailLogin_kn")
    passw = request.POST.get("passLogin_kn")
    
    try:
        user = authe.sign_in_with_email_and_password(email,passw)
    except:
        message = "ಸರಿಯಾದ ಪಾಸ್‌ವರ್ಡ್ / ಇಮೇಲ್ ಅಥವಾ ಎರಡನ್ನೂ ನಮೂದಿಸಿ"
        return render(request, 'index_kn.html',{"messgkn":message})
    
    
    return render(request, 'profile_kn.html')

def charity(request):
    return render(request, 'charity.html')

def quarantine(request):
    return render(request, 'quarantine.html')

def signUp(request):
    return render(request, 'login_kn.html')

def signCompleted(request):
    email = request.POST.get("email1")
    Passwd = request.POST.get("pass1")
    CPassed = request.POST.get("cpass1")
    name = request.POST.get("name1")
    age = request.POST.get("age1")
    gender = request.POST.get("gender1")
    phone = request.POST.get("phone1")
    
    try:
        user = authe.create_user_with_email_and_password(email,Passwd)
    except:
        return HttpResponse("Something went Wrong")
   
    session_id = user['idToken']
    request.session['uid'] = str(session_id)
    return render(request, 'profile_kn.html')

def maps(request):
    return render(request, 'map_kn.html')

def final(request):
    return render(request, 'final_kn.html')

def logout(request):
    auth.logout(request)
    return render(request, 'index_kn.html')