<?php
    $router = new apps_libs_router();
    $user = new apps_libs_userIdentify();
    $owner_username = $user->getSESSION('username');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>My Google Map</title>
    <style>
        #map{
            height:650px;
            width:100%;
            margin-left:auto;
            margin-right:auto;
        }
    </style>
    </head>
    <body>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="./apps/bootstrap/css/bootstrap.min.css">
</head>
<body>
    <div class="container-fluid" style="margin: 0 auto">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">   
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="<?=$router->createUrl("public/homeOwner")?>">Home</a>
                    </li>
                    <a style='background-color: black; height: 80%; margin-left: 1000px'href="<?=$router->createUrl("public/lodgingHouse/listLodgingHouse")?>" class="btn btn-info btn-lg">
                            Manage Lodging House 
                    </a> 
                    <a href="<?=$router->createUrl("logout")?>" class="btn btn-info btn-lg">
                        <i class="glyphicon glyphicon-log-out"></i> Logout 
                    </a>
                </ul>
            </div>
        </nav>
    <div id="map"></div>
    <script>
      var customLabel = {
        restaurant: {
          label: 'R'
        },
        bar: {
          label: 'B'
        }
      };
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(16.063601, 108.180589),
            zoom: 15
            });
            var infoWindow = new google.maps.InfoWindow;
            downloadUrl('http://localhost/LodgingHouse/index.php?r=public%2Fxml', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              if(markerElem.getAttribute('username') == '<?=$owner_username?>'){
                var id = markerElem.getAttribute('id');
                var name = markerElem.getAttribute('name');
                var address = markerElem.getAttribute('address');
                var type = 'house';
                var point = new google.maps.LatLng(
                    parseFloat(markerElem.getAttribute('lat')),
                    parseFloat(markerElem.getAttribute('lng')));

                var infowincontent = document.createElement('div');
                var strong = document.createElement('strong');
                strong.textContent = name
                infowincontent.appendChild(strong);
                infowincontent.appendChild(document.createElement('br'));

                var text = document.createElement('text');
                text.textContent = 'Address : '+address;
                infowincontent.appendChild(text);
                
                infowincontent.appendChild(document.createElement('br'));
                var price =  markerElem.getAttribute('price');
                var text_price = document.createElement('text');
                text_price.textContent = 'Price : ' +price + '  a month';
                infowincontent.appendChild(text_price);

                infowincontent.appendChild(document.createElement('br'));
                var phone =  markerElem.getAttribute('phone');
                var text_phone = document.createElement('text');
                text_phone.textContent = 'Phone : ' +phone;
                infowincontent.appendChild(text_phone);

                infowincontent.appendChild(document.createElement('br'));
                var desc =  markerElem.getAttribute('description');
                var text_desc = document.createElement('text');
                text_desc.textContent = 'Desciption : ' +desc;
                infowincontent.appendChild(text_desc);

                var icon = customLabel[type] || {};
                var marker = new google.maps.Marker({
                  map: map,
                  position: point,
                  label: icon.label
                });
                marker.addListener('click', function() {
                  infoWindow.setContent(infowincontent);
                  infoWindow.open(map, marker);
                });
              }
            });
          });
        }
        function downloadUrl(url, callback) {
            var request = window.ActiveXObject ?
                new ActiveXObject('Microsoft.XMLHTTP') :
                new XMLHttpRequest;

            request.onreadystatechange = function() {
            if (request.readyState == 4) {
                request.onreadystatechange = doNothing;
                callback(request, request.status);
            }
        };

            request.open('GET', url, true);
            request.send(null);
        }

       function doNothing() {}
    </script>
    
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr5qwgemJp4LtodR8lvXg382V-cDFK3bY&callback=initMap">
    </script>
</body>
</html>
