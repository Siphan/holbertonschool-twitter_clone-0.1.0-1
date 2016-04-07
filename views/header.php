<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">NotTwitter</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="index.php">Home</a></li>
        <li><a href="allusers.php">All Users</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <?php
        if ($post_button == true) {
          ?>
  				<li>
  					<button class="btn btn-warning navbutton" data-toggle="modal" data-target="#postModal">Post</button>
  				</li>
          <?php
        }
        ?>
        <li><a href="#"><?php
					if( $_SESSION["user"] != false ) {
						$name = $_SESSION["user"]['full_name'];
						echo "Hello, $name";
					} else {
						echo "Hello, there!";
					}?></a></li>
        <li><a href="<?php
					if( $_SESSION["user"] != false ) {
						echo "logout.php";
					} else {
						echo "login.php";
					}?>">Log <?php
					if( $_SESSION["user"] != false ) {
						echo "out";
					} else {
						echo "in";
					}?></a></li>
      </ul>
    </div>
  </div>
</nav>
