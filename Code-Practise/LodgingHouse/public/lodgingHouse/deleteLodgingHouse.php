<?php
    $router = new apps_libs_router();
    $id = $router->getGET('id');
    $db = new apps_libs_dbConnection();

    $sql = "delete from room where room_id = '$id'";

    $result = $db->delete($sql);
    $router->list();


?>