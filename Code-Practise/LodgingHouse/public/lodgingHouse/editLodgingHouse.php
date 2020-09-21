<?php 
    function get_infor_from_address($address) {
        $prepAddr = str_replace(' ', '+', stripUnicode($address));
        $geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.$prepAddr.'&key=AIzaSyDr5qwgemJp4LtodR8lvXg382V-cDFK3bY&sensor=false');
        //$tem = 'https://maps.googleapis.com/maps/api/geocode/json?address='.$prepAddr.'&key=AIzaSyDr5qwgemJp4LtodR8lvXg382V-cDFK3bY&sensor=false';
        //echo $tem; die();
        $output = json_decode($geocode);
        return $output;
    }
    function stripUnicode($str){
        if (!$str) return false;
        $unicode = array(
          'a'=>'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
          'd'=>'đ|Đ',
          'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
          'i'=>'í|ì|ỉ|ĩ|ị|Í|Ì|Ỉ|Ĩ|Ị',
          'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
          'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
          'y'=>'ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ'
        );
        foreach($unicode as $nonUnicode=>$uni) $str = preg_replace("/($uni)/i",$nonUnicode,$str);
        return $str;
    }

    $router = new apps_libs_router();
    $room_id = $router->getGET('id');
    $db = new apps_libs_dbConnection();
    $s = "select * from room where room_id = '$room_id'";
    $room_edit = $db->select($s);

    $user = new apps_libs_userIdentify();
    $owner_username = $user->getSESSION('username');
    if($router->getPOST("submit")){
        $name = $router->getPOST('name');
        $price = $router->getPOST('price');
        //$name = $router->getPOST('description');
        $address = $router->getPOST('position');
        $desc = $router->getPOST('description');

        $demo = get_infor_from_address($address);
        $lat = $demo->results[0]->geometry->location->lat;
        $lan = $demo->results[0]->geometry->location->lng;
        $sql = "update room set room_name='$name' and room_price='$price' and room_address='$address'and room_description='$desc'and room_lat='$lat' and room_lan='$lan' where owner_username='$owner_username'";
        $db->insert($sql);
        $router->list();
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./apps/bootstrap/css/bootstrap.min.css">
        <style type="text/css">
            .nb{
                background-color: rgb(168, 29, 43);
                border: 1px solid rgb(168, 29, 43);
                height: 80px;
                padding-top: 6px;
                padding-left: 15px;
            }
            .home{
                color: white;
                font-size: 25px;
            }
            .logout{
                margin-top: 8px;
                margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <nav class="navbar navbar-inverse nb">
            <div class="container-fluid">
                <b><a class="navbar-brand home" href="<?=$router->createUrl("public/homeOwner")?>">
                    <span class="glyphicon glyphicon-home icon"></span> HOME
                </a></b>
                <div class="nav navbar-nav navbar-right logout">
                    <a href="<?=$router->createUrl("logout")?>" class="btn btn-info btn-lg">
                        <i class="glyphicon glyphicon-log-out"></i> Logout 
                    </a> 
                </div>
            </div>
        </nav>
        <div class="container">
            <ol class="breadcrumb">
                <li>
                    <span class="glyphicon glyphicon-user"></span> &nbsp;EDIT LODGING HOUSE
                </li>
            </ol>
            <hr />
            
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            </div>
            
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">       
                <form action="<?=$router->createUrl('public/lodgingHouse/addLodgingHouse', [])?>" method="POST" class="form-horizontal" role="form">
                        <div class="form-group">
                            <legend>Edit loding house</legend>
                        </div>
                        <input type="text" name="name"class="form-control"required="required" value='<?=$room_edit[0]['room_name']?>' placeholder="Nhap vao ten nha tro">
                        <br />
                        <input id='autocomplete' type="text" name="position"class="form-control"required="required"value='<?=$room_edit[0]['room_address']?>' placeholder="Nhap vao vi tri">
                        <br/>                  
                        <input type="text" name="price"class="form-control"required="required" placeholder="Nhap vao gia tien" value='<?=$room_edit[0]['room_price']?>'>         
                        <br/>
                        <textarea placeholder="Nhap vao mo ta chi tiet" name="description"class="form-control" rows="3" required="required"><?=$room_edit[0]['room_description']?></textarea>         
                        <br />
                        <div class="form-group" style='margin-left:180px;'>                           
                            <button style='margin-right:20px;'type="submit"name='submit' class="btn btn-primary" value='ok'>ADD</button>         
                            <a class="btn btn-primary" href="<?=$router->createUrl("public/lodgingHouse/listLodgingHouse")?>" role="button">Back</a>                            
                        </div>
                </form>
                
            </div>        
        </div>
    <script>
        var markers = [];
        var autocomplete;
        var countryRestrict = { 'country': 'us' };
        var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
        var hostnameRegexp = new RegExp('^https?://.+?/');
        function initMap() {
            autocomplete = new google.maps.places.Autocomplete((
                document.getElementById('autocomplete')));
            places = new google.maps.places.PlacesService(map);

            autocomplete.addListener('place_changed', onPlaceChanged);
        }

        function onPlaceChanged() {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                map.panTo(place.geometry.location);
                map.setZoom(15);
                search();
            } else {
                document.getElementById('autocomplete').placeholder = 'Enter a city';
            }
        }
    </script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC58Pa1xnAA7rcKkgAcwX28G0-gyWLpryU&libraries=places&callback=initMap"
        async defer>
    </script>
    </body>
</html>