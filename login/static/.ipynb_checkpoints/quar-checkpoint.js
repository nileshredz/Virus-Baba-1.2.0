function initMap() {

        var kasturba = {lat: 18.9840, lng: 72.8298};
        var viva = {lat:19.397266, lng:72.839331};
        var  Regional_Medical_Research_Centre = {lat:11.634959  ,lng:92.715538};
        var Sri_Venkateswara_Institute_of_Medical_Sciences = {lat:13.638198  ,lng:79.403831};
        var Andhra_Medical_College={lat:17.706779  ,lng:83.304871};
        var Sidhartha_Medical_College={lat:13.345448  ,lng:77.059609};
        var Rangaraya_Medical_College={lat:16.979657  ,lng:82.237327};
        var Rajendra_Memorial_Research_Institute_of_Medical_Sciences = {lat:25.599903  ,lng:85.197727};
        var All_India_Institute_Medical_Sciences1 = {lat:21.257030  ,lng:81.579216};
        var All_India_Institute_Medical_Sciences2  = {lat:28.567262  ,lng:77.210045};
        var BJ_Medical_College = {lat:23.052698  ,lng:72.602895};
        var MP_Shah_Government_Medical_College   = {lat:22.477595  ,lng:70.065256};
        var Goverment_Medical_college_Uttarakhand = {lat:29.206589 ,lng:79.521392};
        var AIIMS_Rishikesh = {lat:30.078137, lng:78.285557};
        var Dr_Ahujas = {lat:30.078137, lng:78.285557};
        var Institute_of_Medical_Sciences_Varansi = {lat:25.274605, lng:82.999515};
        var Jawaharlal_Nehru_Medical_College_Aligarh = {lat:27.918666, lng:78.085740};
        var King_George_Medical_University = {lat:26.869279, lng:80.916242};
        var RML_MEHROTRA  = {lat:26.878448, lng:80.932657};
        var University_of_Medical_Sciences = {lat:26.960850, lng:78.960583};

        // Function starts Here
        map = new google.maps.Map(document.getElementById('map'), {
          center: kasturba ,
          zoom: 8
        });
        // Marker for Kasturba Hospital
        var marker = new google.maps.Marker({
          position: kasturba,
          map: map,
          title: 'Kasturba Hospital,Sane Guruji Marg, Arya Nagar, Chinchpokli, Mumbai, Maharashtra 400034',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Kasturba Hospital, Mumbai</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:green;">250</h5>'
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });


        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        marker.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker['title'];
        });

    //Marker for Viva Institute of Technology
    var marker1 = new google.maps.Marker({
          position: viva,
          map: map,
          title: 'Viva Institute of Pharmacy,Shirgaon, Veer Sawarkar Road, Virar (East), Vasai, Thane, Maharashtra 401303.',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString1 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Viva Institute of Technology,Vasai, Mumbai</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:red;">Unavailable</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:red;">0</h5>'
            '</div>'+
            '</div>';

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });


        marker1.addListener('click', function() {
          infowindow1.open(map, marker1);
        });

        marker1.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker1['title'];
        });

   //Marker for Regional Medical center
    var marker2 = new google.maps.Marker({
          position:  Regional_Medical_Research_Centre,
          map: map,
          title: 'Regional Medical Research Centre,Post Bag 13, Dollygunj, Port Blair,Andaman and Nicobar Islands 744103',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString2 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Regional Medical Research Centre,Andaman and Nicobar Islands</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });


        marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
        });

         marker2.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker2['title'];
        });


     //Marker for Sri Venkatesh
    var marker3 = new google.maps.Marker({
          position:  Sri_Venkateswara_Institute_of_Medical_Sciences,
          map: map,
          title: 'Sri Venkateswara Institute of Medical Sciences,Alipiri Rd, Sri Padmavati Mahila Visvavidyalayam,Tirupati,Andhra Pradesh 517507',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString3 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Sri Venkateswara Institute of Medical Sciences,Andhra Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });


        marker3.addListener('click', function() {
          infowindow3.open(map, marker3);
        });

        marker3.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker3['title'];
        });
   
    //Marker for Andhra Medical College
    var marker4 = new google.maps.Marker({
          position: Andhra_Medical_College,
          map: map,
          title: 'Andhra Medical College, Visakhapatnam,Medical College Road Opp Collector Office Maharanipeta King George Hospital Campus,Andhra Pradesh 530002',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString4 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Andhra Medical College, Andhra Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">305</h5>'
            '</div>'+
            '</div>';

        var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });


        marker4.addListener('click', function() {
          infowindow4.open(map, marker4);
        });

        marker4.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker4['title'];
        });
   
    //Marker for Sidhartha Medical College
    var marker5 = new google.maps.Marker({
          position: Sidhartha_Medical_College,
          map: map,
          title: 'Sidhartha Medical College,NH 16 Service Rd, beside Dr NTR University of Health Sciences, Gunadala, Vijayawada,Andhra Pradesh 520008',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString5 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Sidhartha Medical College,Andhra Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:red;">Unvailable</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:red;">0</h5>'
            '</div>'+
            '</div>';

        var infowindow5 = new google.maps.InfoWindow({
          content: contentString5
        });


        marker5.addListener('click', function() {
          infowindow5.open(map, marker5);
        });

        marker5.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker5['title'];
        });
    //Marker for Rangaraya Medical College
    var marker6 = new google.maps.Marker({
          position:  Rangaraya_Medical_College,
          map: map,
          title: 'Rangaraya Medical College,Pithampuram, Road, Kakinada,Andhra Pradesh 533001 ',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString6 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Rangaraya Medical College,Andhra Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'+
            '</div>'+
            '</div>';

        var infowindow6 = new google.maps.InfoWindow({
          content: contentString6
        });


        marker6.addListener('click', function() {
          infowindow6.open(map, marker6);
        });

        marker6.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker6['title'];
        });
    
    //Marker for Government Medical Uttarakhand
    var marker7 = new google.maps.Marker({
          position:  Goverment_Medical_college_Uttarakhand,
          map: map,
          title: 'Government Medical College,Rampur Rd, Rampur, Haldwani, Uttarakhand 263129.',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString7 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Government Medical College, Uttarakhand</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:green;">150</h5>'+
            '</div>'+
            '</div>';

        var infowindow7 = new google.maps.InfoWindow({
          content: contentString7
        });


        marker7.addListener('click', function() {
          infowindow7.open(map, marker7);
        });

        marker7.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker7['title'];
        });
    
    //Marker for AIIMS Rishikesh
    var marker8 = new google.maps.Marker({
          position:  AIIMS_Rishikesh,
          map: map,
          title: 'AIIMS,Shivaji Nagar, Rishikesh, Uttarakhand 249202',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString8 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">AIIMS,Shivaji Nagar, Rishikesh, Uttarakhand 249202</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow8 = new google.maps.InfoWindow({
          content: contentString3
        });


        marker8.addListener('click', function() {
          infowindow8.open(map, marker8);
        });
    
    marker8.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker8['title'];
        });
    
    //Marker for Dr. Ahujas,UttarPradesh
    var marker9 = new google.maps.Marker({
          position:   Dr_Ahujas,
          map: map,
          title: 'Dr. Ahujas Pathology and Imaging Centre, 7-B Astley Hall, Ugrasain Rd, Dehradun, Uttarakhand 248001',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString9 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Dr. Ahujas Pathology and Imaging Centre, Uttarakhand</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow9 = new google.maps.InfoWindow({
          content: contentString9
        });


        marker9.addListener('click', function() {
          infowindow9.open(map, marker9);
        });
    
        marker9.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker9['title'];
        });
    
    
       //Marker for Institute of Medical Sciences Varansi
    var marker10 = new google.maps.Marker({
          position:  Institute_of_Medical_Sciences_Varansi,
          map: map,
          title: 'Institute of Medical Sciences BHU, Aurobindo Colony, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString10 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Institute of Medical Sciences BHU, Uttar Pradesh 221005</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow10 = new google.maps.InfoWindow({
          content: contentString10
        });


        marker10.addListener('click', function() {
          infowindow10.open(map, marker10);
        });
    
        marker10.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker10['title'];
        });
    
    //Marker for JawaharLal Nehru Hospital Uttar Pradesh    
     var marker11 = new google.maps.Marker({
          position:  Jawaharlal_Nehru_Medical_College_Aligarh,
          map: map,
          title: 'Jawaharlal Nehru Medical College, AMU, Medical Rd, AMU Campus, Aligarh, Uttar Pradesh 202002',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString11 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">Jawaharlal Nehru Medical College, Uttar Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow11 = new google.maps.InfoWindow({
          content: contentString11
        });


        marker11.addListener('click', function() {
          infowindow11.open(map, marker11);
        });
    
    marker11.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker11['title'];
        });
    
    //Marker for King's george Hospital Uttar Pradesh    
     var marker12 = new google.maps.Marker({
          position:  King_George_Medical_University,
          map: map,
          title: "King George's Medical University,Shah Mina Rd, Chowk, Lucknow, Uttar Pradesh 226003",
          animation: google.maps.Animation.BOUNCE
        });

    var contentString12 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+ 
             '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">King Georges Medical University,Shah Mina Rd, Chowk, Lucknow, Uttar Pradesh 226003</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow12 = new google.maps.InfoWindow({
          content: contentString12
        });


        marker12.addListener('click', function() {
          infowindow12.open(map, marker12);
        });
    
    marker12.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker12['title'];
        });
    
    //Marker for RML MEHROTRA PATHOLOGY Uttar Pradesh    
     var marker13 = new google.maps.Marker({
          position:  RML_MEHROTRA,
          map: map,
          title: 'RML MEHROTRA PATHOLOGY PVT. LTD,B-171, Daliganj Crossing Rd, Nirala Nagar, Lucknow, Uttar Pradesh 226020',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString13 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">RML MEHROTRA PATHOLOGY PVT. LTD,  Uttar Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow13 = new google.maps.InfoWindow({
          content: contentString13
        });


        marker13.addListener('click', function() {
          infowindow11.open(map, marker13);
        });
    
    marker13.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker13['title'];
        });
    
    //Marker for Uttar Pradesh University of Medical Sciences  Uttar Pradesh    
     var marker14 = new google.maps.Marker({
          position:  University_of_Medical_Sciences,
          map: map,
          title: 'University of Medical Sciences, Saifai, Etawahe,Off, Kurawali - Mainpuri - Etawah Rd, Saifai, Uttar Pradesh 206130',
          animation: google.maps.Animation.BOUNCE
        });

    var contentString14 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading" style="font-family:montserrat;">University of Medical Sciences, Uttar Pradesh</h4>'+
            '<div id="bodyContent">'+
            '<h5>Status: </h5>'+'<h5 style="color:green;">Available</h5>'+
        '<h5>Total Beds Available: </h5>'+'<h5 style="color:yellow;">15</h5>'
            '</div>'+
            '</div>';

        var infowindow14 = new google.maps.InfoWindow({
          content: contentString14
        });


        marker14.addListener('click', function() {
          infowindow14.open(map, marker14);
        });  
    
        marker14.addListener('dblclick', function() {
           document.getElementById("staticLocation").value = marker14['title'];
        });

     }


$(function () {
  $("#datetimepicker1").datetimepicker();
});




