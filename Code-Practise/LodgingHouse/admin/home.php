<?php
    $userIdentify = new apps_libs_userIdentify();
    $router = new apps_libs_router();
    
    
    if($userIdentify->getSESSION("kind") == "owner"){
        $router->pageError ("Page Not Found");
        die();
    }
    if(!$userIdentify->getID())
        $router->loginPage(); 

    $sql = "select * from owner";
    $user = new apps_libs_dbConnection();
    $result = $user->select($sql);
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
                <b><a class="navbar-brand home" href="<?=$router->createUrl("admin/home")?>">
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
                    <span class="glyphicon glyphicon-user"></span> &nbsp;MANAGE OWNER ACCOUNT
                </li>
            </ol>
            <a href="<?=$router->createUrl('admin/manageUser/addUser')?>"><button type="button" class="btn btn-success">
                Add owner
            </button></a>
            <hr />
            <table class="table table-bordered table-hover text-center">
                <thead>
                    <tr>     
                        <th class="text-center">Username</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Phone</th>
                        <th class="text-center">Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($result as $row){ ?>
                        <tr>
                            <td><?= $row["owner_username"] ?></td>
                            <td><?= $row["owner_name"] ?></td>
                            <td><?= $row["owner_phone"] ?></td>
                            <td><?= $row["owner_address"] ?></td>
                            <td>
                                <a href="<?=$router->createUrl('admin/manageUser/addUser', ["id"=>$row["owner_username"]])?>">
                                    <button type="button" class="btn btn-warning">
                                        <i class="glyphicon glyphicon-pencil"></i>&nbsp;
                                        Detail
                                    </button>
                                </a>
                                <a href="<?=$router->createUrl('admin/manageUser/deleteUser', ["id"=>$row["owner_username"]])?>">
                                    <button type="button" class="btn btn-danger">
                                        <i class="glyphicon glyphicon-trash"></i>&nbsp;
                                        Delete
                                    </button>
                                </a>
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </body>
</html>