<?php
	$router = new apps_libs_router();
    $account = trim($router->getPOST("account"));
    $password = trim($router->getPOST("password"));
    
    $userIdentify = new apps_libs_userIdentify();
    
    if($userIdentify->isLogin() != NULL){
        if($userIdentify->isLogin() == "admin")
            $router->adminPage ();
        else
            $router->publicPage ();
    }
    
    if($router->getPOST("submit") && $account && $password){
        $userIdentify->username = $account;
        $userIdentify->password = $password;
	
        if($userIdentify->login() != NULL){
            if($userIdentify->login() == "admin"){
				$router->adminPage ();
			}
            else
				$router->publicPage ();
            
            if(!$router->getPOST("checkbox")){
                //setcookie("username", "", time()-604800);
                setcookie("password", "", time()-604800);
            }
        }
        else
            $result = "Username or password is incorrect";
    }
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
	  	<meta charset="utf-8">
	 	<meta name="viewport" content="width=device-width, initial-scale=1">
	 	<link rel="stylesheet" href="./apps/bootstrap/css/bootstrap.min.css">
	  	<style type="text/css">
	  		body{
	  			background-color: rgb(168, 29, 43);
	  		}
			.content{
				margin-top: 80px;
				padding-bottom: 25px;
			}
			.title{
				font-size: 30px;
			}
			.title a{
				text-decoration: none;
			}
			.panel-body{
				
			}
			.icon_eye{
				width:20px;
				height:14px;	
				margin-top:10px;
				transform: translateX(-70px);	
				cursor: pointer;		
			}
			.set_btn{
				box-sizing: border-box;
            	border-radius: 50px;
            	width:155px;                         
			}
			.alert{
				margin-bottom: 10px;
			}
			.remember_password{
				margin-bottom: 10px;
			}
	  	</style>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					<div class="panel panel-primary content">
						<div class="panel-heading">
							<h3 class="panel-title title">
								<a href="<?=$router->createUrl('login') ?>"><b>Login</b></a>
							</h3>
						</div>
						<div class="panel-body">
							<div class="col-md-3"></div>
							<div class="col-md-7">
								<div class="col-md-12 alert">			                        	
			                       	<span class="label label-danger"><?= (isset($result)) ? $result : "" ?></span>
			                    </div>
								<form class="form-horizontal" action="<?=$router->createUrl('login') ?>" method="POST">
									<div class="form-group"> 
	                            		<div class="col-md-10">
	                                		<input type="text" id="account" name="account" class="form-control" placeholder="Enter username" required value="<?= (isset($_COOKIE["username"])?$_COOKIE["username"]:"") ?>">
	                            		</div>
										<div class="col-md-2"></div>
	                        		</div>
			                        <div class="form-group">
			                            <div class="col-md-10">
			                                <input type="password" name="password" class="form-control" placeholder="Enter password" id = "password" required value="<?= (isset($_COOKIE["password"])?$_COOKIE["password"]:"") ?>">
			                            </div>
										<div class="col-md-2">
											<img class="icon_eye" src = "./icon/icon_eye.png" onclick="showPass()" />
										</div>
			                        </div>
			                        <div class="form-group">
			                        	<div class="col-md-10 remember_password">
				                            <div class="checkbox">
				                            	<label>
				                            		<input type="checkbox" name ="checkbox" checked>
				                            		<span class="label label-info">Remember your password?</span>
				                            	</label>
				                            </div>
				                        </div>
			                        </div>
			                        <div class="form-group">
			                        	<div class="col-md-10">
				                            <button type="submit" name="submit" value="login" class="btn btn-primary set_btn">Login</button>
				                            <button type="reset" class="btn btn-danger set_btn" >Cancel</button>
				                        </div>
				                        <div class="col-md-2">
			                        </div>
								</form>
							</div>
							<div class="col-md-2"></div>
						</div>
					</div>
				</div>
				<div class="col-md-2"></div>

			</div>
		</div>
		<script>
			function showPass(){
				if(document.getElementById("password").type == "password")
					document.getElementById("password").type = "text";
				else
					document.getElementById("password").type = "password";
			}
	    </script>
		<script src="./apps/bootstrap/jquery/jquery.min.js"></script>
		<script src="./apps/bootstrap/js/bootstrap.min.js"></script>
	</body>
<html>