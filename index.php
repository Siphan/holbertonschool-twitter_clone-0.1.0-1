<?php session_start();
	include_once('models/session_login.php');
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
	<title>Siphan</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" href="index.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="index.js"></script>

	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<?php

function userExists($login, $password, $users) {
	foreach ($users as &$user) {
		if ($user['login'] == $login And $user['password'] == $password) {
			return $user;
		}
	}
	return false;
}

$failed = false;
if ($_SESSION["logged_in"] == false) {
	if (isset($_POST['login']) And isset($_POST['password'])) {
		$_SESSION["user"] = userExists($_POST['login'], $_POST['password'], $users);
		if ($_SESSION["user"] != false) {
			$_SESSION["logged_in"] = true;
			if ($_POST['remember'] == "yes") {
				setcookie("login", $_SESSION["user"]["login"], time()+60*60*24*7, "/php", "siphan.tech");
			}
		} else {
			$failed = true;
		}
	}
}

?>

<body>

	<?php
	if ($_SESSION["logged_in"]) {
		$post_button = true;
	}
	include "views/header.php";
	?>

	<?php
	if ($failed) {
		?>
		<div class="alert alert-danger">
		  <div class="panel-body"><strong>Invalid Credentials</strong></div>
		</div>
		<?php
	}
	?>

	<div class="container">
		<div class="row">
			<?php
			include "views/aside.php";
			?>
			<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
				<div id="statuses">
				</div>
				<div class="load_more_statuses">
					<button class="btn btn-warning center" id="statusbutton">More Statuses</button>
				</div>
			</div>
		</div>
	</div>

	<div id="postModal" class="modal fade" role="dialog">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Post a status</h4>
	      </div>
	      <div class="modal-body">
					<form>
						<div class="form-group">
	            <label class="control-label" for="status_text"></label>
	            <div>
	                <textarea title="Post a status" rows="3" class="form-control no-resize" id="status_text" placeholder="New status..."></textarea>
	            </div>
	        	</div>
						<div class="align-right">
							<button type="submit" class="btn btn-warning">Submit</button>
						</div>
					</form>
	      </div>
	    </div>
	  </div>
	</div>
</body>

</html>
