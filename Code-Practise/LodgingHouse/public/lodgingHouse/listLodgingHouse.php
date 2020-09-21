<?php 
    $router = new apps_libs_router();
    $db = new apps_libs_dbConnection();
    $user = new apps_libs_userIdentify();
    $name = $user->getSESSION('username');

    $sql = "select * from room where owner_username = '$name'";
    $result = $db->select($sql);

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
                    <span class="glyphicon glyphicon-user"></span> &nbsp;MANAGE LODGING HOUSE
                </li>
            </ol>
            <a href="<?=$router->createUrl('public/lodgingHouse/addLodgingHouse')?>"><button type="button" class="btn btn-success">
                Add Lodging House
            </button></a>
            <hr />
            <table class="table table-bordered table-hover text-center">
                <thead>
                    <tr>     
                        <th class="text-center">Room ID</th>
                        <th class="text-center">Room Name</th>
                        <th class="text-center">Room Address</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($result as $row){ ?>
                        <tr>
                            <td><?= $row["room_id"] ?></td>
                            <td><?= $row["room_name"] ?></td>
                            <td><?= $row["room_address"] ?></td>
                            <td><?= $row["room_price"] ?></td>
                            <td><?= $row["room_description"] ?></td>
                            <td>
                                <a href="<?=$router->createUrl('public/lodgingHouse/editLodgingHouse', ["id"=>$row["room_id"]])?>">
                                    <button type="button" class="btn btn-warning">
                                        <i class="glyphicon glyphicon-pencil"></i>&nbsp;
                                        Edit
                                    </button>
                                </a>
                                <a href="<?=$router->createUrl('public/lodgingHouse/deleteLodgingHouse', ["id"=>$row["room_id"]])?>">
                                    <button type="button" class="btn btn-danger"
                                        onclick="return confirm('Are you sure to delete this record?') "
                                    >
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