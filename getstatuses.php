<?php
include "models/statuses.php";
include "models/users.php";
if (isset($_GET['start'])) {
  $start = $_GET['start'];
} else {
  $start = 0;
}
$end = $start + 10;

for ( ; $start < $end ; $start++) {
  $status = false;
  foreach ($statuses as &$_status) {
    if ($_status['id'] == $start) {
      $status = $_status;
      break;
    }
  }
  if ($status != false) {
    $user_id = $status["user"];
    $user = false;
    foreach ($users as &$_user) {
      if ($_user['id'] == $user_id) {
        $user = $_user;
        break;
      }
    }
    if ($user == false) {
      continue;
    }
  ?>
    <div class="well">
      <div class="status">
        <div >
          <img class="status_picture" src="<?php echo $user["image"]; ?>">
        </div>
        <div>
          <p><strong><?php echo $user["full_name"]; ?></strong></p>
          <p><?php echo $status['status']; ?></p>
        </div>
      </div>
    </div>
  <?php
  }
}

?>
