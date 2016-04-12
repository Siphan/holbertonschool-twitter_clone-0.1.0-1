<?php session_start();
      include_once('models/session_login.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Running Blog | login</title>
  <meta charset="utf-8">
  <meta name="description" content="Twitter Runner">
  <meta name="author" content="Siphan Bou">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="styles.css"/>
  <script src="alljavascript.js"></script>
</head>

<body>
	<?php
	include "views/header.php";
	?>
  <div class="container">
    <div class="jumbotron">
      <h2 class="text-center">Login</h2>
      <form class="form-horizontal" action="index.php" method="post">
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="login">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="password">Password:</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label><input type="checkbox" name="remember" value="yes"> Remember me</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-warning">Log in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</body>
</html>