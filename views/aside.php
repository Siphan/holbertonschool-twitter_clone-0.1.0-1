<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 aside">
  <div data-toggle="collapse" data-target="#aside-inner" class="well" id="notification-bar">
    <h4>Notifications <span class="badge">1</span></h4>
    <p>Hold it! Take a look at this latest status</p> 
  </div>
  <div id="aside-inner" class="collapse in">
    <?php
    if( $_SESSION["user"] != false ) {
      $login = $_SESSION["user"]["login"];
      $rot13login = str_rot13($login);
      $login_length = strlen($login);
    ?>
    <div class="well">
      <p>You are logged in, <strong><?php echo "$login";?></strong></p>
      <p>Your rot13 login is <strong><?php echo "$rot13login";?></strong></p>
      <p>Your login length is <strong><?php echo "$login_length";?></strong></p>
    </div>
    <?php } ?>
    <div class="well">
      <p><strong>New Post</strong> from <strong>Siphan</strong>:</p>
      <h5>Yosemite's top trails</h5>
      <ul>
	<li>Vernal & Nevada Falls</li>
	<li>Half Dome</li>
	<li>Tueeulala & Wapama Falls</li>
	<li>May Lake & Mt Hoffmann</li>
	<li>Cathedral Lakes</li>
	<li>Sentinel Dome</li>
      </ul>
    </div>
  </div>
</div>
