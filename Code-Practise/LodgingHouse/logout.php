<?php

    $userIdentify = new apps_libs_userIdentify();
    $userIdentify->logout();
    $router = new apps_libs_router();
    $router->welcomePage();

 ?>