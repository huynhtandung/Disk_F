<?php

    include './apps/autoLoad.php';
    
    $router = new apps_libs_router(__DIR__);
    
    $router->router();

    
    
    /*$admin = new apps_libs_dbConnection();
    $a = "admin";
    $b = md5("admin");
    $sql = "insert into admin (admin_username, admin_password) values('$a','$b')";
    $admin->insert($sql);*/

?>