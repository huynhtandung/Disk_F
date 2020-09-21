<?php
	$router = new apps_libs_router();
	$userIdentify = new apps_libs_userIdentify();
	if($userIdentify->getSESSION("kind") == "user"){
        $router->pageError ("Page Not Found");
        die();
    }
    if(!$userIdentify->getID())
        $router->loginPage(); 

    $user = new apps_libs_dbConnection();
    if($router->getGET("id")){
        $id = $router->getGET("id");
        if(is_numeric($router->getGET("id"))){
            $sql = "select * from user where user_id='$id' limit 1";
            $result = $user->select($sql);
            if(!$result)
            	$router->pageError("User is not exist");
            //$name = $result[0]["name"];
        }
        else{
            $router->pageError("Page Not Found");
            die();
        }
    }

    if($router->getPOST("submit")){
    	$account = $router->getPOST("account");
		$password = md5($router->getPOST("password"));
		$name = $router->getPOST("name");
		$position = $router->getPOST("position");
		$contact = $router->getPOST("contact");

    	if(!$router->getGET("id")){
    		$sql = "select * from user where user_username = '$account' limit 1";
        	$result = $user->select($sql);
        	if($result){
            	$router->pageError("USERNAME has exist");
            	die();
        	}

        	$sql = "insert into user(user_username,user_password,user_name, user_position, user_contact) values('$account','$password', '$name', '$position', '$contact')";
        	$user->insert($sql);
        	$router->adminPage(); 
		}
		else{
			$id = $router->getGET("id");
			$sql = "update user set user_name='$name', user_position='$position', user_contact='$contact' where user_id='$id'";
            $user->update($sql);
            $router->adminPage();
		}
    }
    
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Add user</title>
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
                	<?php if(!$router->getGET("id")){?>
                    	<i class="glyphicon glyphicon-plus"></i> &nbsp;Add user
                    <?php }else{ ?>
                    	<i class="glyphicon glyphicon-edit"></i> &nbsp;Edit&nbsp;&nbsp;  <?=$result[0]['user_name']?>
                    <?php } ?>
                </li>
            </ol>
			<div class="panel panel-primary">
				<div class="panel-body">
					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<form class="form-horizontal" action="<?= $router->createUrl('admin/manageUser/addUser', ["id"=>$router->getGET("id")])?>" method="POST">
				            <div class="form-group">
				                <label class="control-label col-xs-3">Username</label>
				                <div class="col-xs-9">
				                    <input name="account" type="text" class="form-control" value="<?= (is_numeric($router->getGET('id'))? $result[0]['user_username'] : "") ?>" 			required 
				                    	<?= (is_numeric($router->getGET('id')))? "readonly":""  ?> >
				                </div>
				            </div>
				            <?php if(!is_numeric($router->getGET('id'))){ ?>
					            <div class="form-group">
					                <label class="control-label col-xs-3">Password</label>
					                <div class="col-xs-9">
					                    <input name="password" type="password" class="form-control"  required>
					                </div>   
					            </div>
					         <?php } ?>
				            <div class="form-group">
				                <label class="control-label col-xs-3">Name</label>
				                <div class="col-xs-9">
				                    <input name="name"type="text" class="form-control"required value="<?= (is_numeric($router->getGET('id'))? $result[0]['user_name'] : "") ?>">
				                </div>   
				            </div>
				            <div class="form-group">
				                <label class="control-label col-xs-3">Position</label>
				                <div class="col-xs-9">
				                    <input name="position" type="text" class="form-control"  required 
				                    	value="<?= (is_numeric($router->getGET('id'))? $result[0]['user_position'] : "") ?>"
				                    >
				                </div>   
				            </div>
				            <div class="form-group">
				                <label class="control-label col-xs-3">Contact</label>
				                <div class="col-xs-9">
				                    <input name="contact"type="text" class="form-control"required value="<?=(is_numeric($router->getGET('id'))? $result[0]['user_contact']:"") ?>">
				                </div>   
				            </div>

				            <div class="col-xs-offset-3 col-xs-9">    
                    			<button type="submit" name="submit" value="addUser" class="btn btn-danger">&nbsp;&nbsp;&nbsp;OK &nbsp;&nbsp;&nbsp;</button>
                    			<a href="<?=$router->createUrl("admin/home")?>"><button type="button" class="btn btn-warning">Cancel</button></a>
                			</div>

	        			</form>
					</div>
				</div>
			</div>      
        </div>

        
		
	</body>
</html>