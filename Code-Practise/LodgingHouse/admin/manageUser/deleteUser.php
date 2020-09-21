<?php
	$router = new apps_libs_router();
	$userIdentify = new apps_libs_userIdentify();
	if($userIdentify->getSESSION("kind") == "owner"){
        $router->pageError ("Page Not Found");
        die();
    }
    if(!$userIdentify->getID())
        $router->loginPage(); 

    $user = new apps_libs_dbConnection();
    if($router->getGET("id")){
        $id = $router->getGET("id");
        if($id){
            $sql = "select * from owner where owner_username='$id' limit 1";
            $result = $user->select($sql);
            if(!$result)
            	$router->pageError("Owner is not exist");
            //$name = $result[0]["name"];
        }
        else{
            $router->pageError("Page Not Found");
            die();
        }
    }
    if($router->getPOST("submit")){
    	$id = $router->getGET("id");
    	$sql = "delete from owner where owner_username = '$id'";
    	$user = new apps_libs_dbConnection();
    	$user->delete($sql);
    	$router->adminPage();
    }
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Delete user</title>
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
	 		span{
	 			font-size: 20px;
	 			font-family: cursive;
	 		}
	 		.main{
	 			border: 1px solid black;
	 			padding: 20px;
	 		}
	 		button{
	 			margin-left: 20px;
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
                   	<i class="glyphicon glyphicon-trash"></i> &nbsp;Delete&nbsp;&nbsp;  <?=$result[0]['owner_name']?>
                </li>
            </ol>
			
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 main">
				<form action="<?=$router->createUrl('admin/manageUser/deleteUser', ["id"=>$id])?>" method="POST">				
					<div class="form-group">
						<span>Are you sure to delete this user </span><span class="label label-danger"> <?=$result[0]['owner_name']?></span>
					</div>
					<button type="submit" value="delete" name="submit" class="btn btn-primary">Delete</button>
					<a href="<?=$router->createUrl("admin/home")?>"><button type="button" class="btn btn-warning">Cancel</button></a>
				</form>
			</div>			   
        </div>

        
		
	</body>
</html>