<?php
	$router = new apps_libs_router();
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to dashboard</title>
	  	<meta charset="utf-8">
	 	<meta name="viewport" content="width=device-width, initial-scale=1">
	 	<link rel="stylesheet" href="./apps/bootstrap/css/bootstrap.min.css">
	 	<style type="text/css">
	 		.header{
	 			background-color: rgb(168, 29, 43);
	 			font-size: 50px;
	 			margin-bottom: 50px;
	 		}
	 		img{
	 			width: 700px;
	 			height:250px;
	 			margin-bottom: 30px;
	 		}
	 		p{
	 			font-size: 20px;
	 			color: black;
	 			text-align: center;
	 			padding-bottom: 30px;
	 		}
	 	
	 	</style>
	</head>
	<body>
		<div class="container-fluid text-center header">
			<b>WELCOME TO DASHBOARD</b>
		</div>
		<div class="container">
			<div class="col-md-2"></div>
			<div class="col-md-8">
				<p><b>Dashboard is a system that is developed from the integration of two legacy systems human resource and payroll</b></p>
				<img src="./icon/background.png" />

				<div class="text-center">
					<a href="<?=$router->createUrl("login")?>">
						<button type="button" class="btn btn-info">LOGIN TO UPLOAD LODGING HOUSE
						</button>
					</a>
					<a href="<?=$router->createUrl("public/takePosition")?>">
						<button type="button" class="btn btn-info">or LOGIN AS A GUEST
						</button>
					</a>		
				</div>

			</div>
		</div>
		
	</body>
</html>