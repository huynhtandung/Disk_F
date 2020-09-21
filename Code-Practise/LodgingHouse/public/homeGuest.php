<?php
    $router = new apps_libs_router();

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
                        <a href="<?=$router->createUrl("public/homeGuest")?>">Home</a>
                    </li>
                   
                    <li>
                        <form style='margin-left:700px' class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input style='width:400px' type="text" class="form-control" placeholder="Enter location">
                            </div>
                            <button type="submit" class="btn btn-default">Search</button>
                        </form>
                    </li>
                    <a href="<?=$router->createUrl("logout")?>" class="btn btn-info btn-lg">
                        <i class="glyphicon glyphicon-log-out"></i> Logout 
                    </a>
                </ul>
            </div>
        </nav>
    <div id="map"></div>
    <script>
        <?php 
            $db = new apps_libs_dbConnection();
            $sql = 'select * from room';
            $room = $db->select($sql);
        ?>
        function initMap(){
        // Map options
            var options = {
                zoom:15,
                center:{lat:16.063601,lng:108.180589}
            }

            // New map
            var map = new google.maps.Map(document.getElementById('map'), options);
        }
    </script>
    
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr5qwgemJp4LtodR8lvXg382V-cDFK3bY&callback=initMap">
    </script>
</body>
</html>
