<?php

    spl_autoload_register(function($className){
        $last = str_replace("_", "\\", $className);
        $first = str_replace("apps", "", dirname(__FILE__));
        include_once $first.$last.".php";
    });

?>