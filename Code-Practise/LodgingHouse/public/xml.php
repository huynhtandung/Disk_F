<?php
    //require("phpsqlajax_dbinfo.php");

    function parseToXML($htmlStr)
    {
    $xmlStr=str_replace('<','&lt;',$htmlStr);
    $xmlStr=str_replace('>','&gt;',$xmlStr);
    $xmlStr=str_replace('"','&quot;',$xmlStr);
    $xmlStr=str_replace("'",'&#39;',$xmlStr);
    $xmlStr=str_replace("&",'&amp;',$xmlStr);
    return $xmlStr;
    }

    // Opens a connection to a MySQL server
    $db = new apps_libs_dbConnection();
    $sql = 'select * from room, owner where room.owner_username = owner.owner_username';
    $result = $db->select($sql);

    header("Content-type: text/xml");

    // Start XML file, echo parent node
    echo "<?xml version='1.0' ?>";
    echo '<markers>';
    $ind=0;
    // Iterate through the rows, printing XML nodes for each
    foreach($result as $row){
    // Add to XML document node
    echo '<marker ';
    echo 'id="' . $row['room_id'] . '" ';
    echo 'name="' . parseToXML($row['room_name']) . '" ';
    echo 'address="' . parseToXML($row['room_address']) . '" ';
    echo 'lat="' . $row['room_lat'] . '" ';
    echo 'lng="' . $row['room_lan'] . '" ';
    echo 'username="' . $row['owner_username'] . '" ';
    echo 'description="' . $row['room_description'] . '" ';
    echo 'price="' . $row['room_price'] . '" ';
    echo 'phone="' . $row['owner_phone'] . '" ';
    //echo 'type="' . $row['type'] . '" ';
    echo '/>';
    $ind = $ind + 1;
    }

    // End XML file
    echo '</markers>';

?>