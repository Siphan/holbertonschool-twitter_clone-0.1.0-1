<?php
include_once('models/users.php');
if (!isset($_SESSION["logged_in"])) {
  if (isset($_COOKIE["login"])) {
    $_SESSION["user"] = false;
    $_SESSION["login"] = false;

    foreach ($users as &$user) {
      if ($user['login'] == $_COOKIE["login"]) {
        $_SESSION["logged_in"] = true;
        $_SESSION["user"] = $user;
        $current_user = $user;
      }
    }
  }
}
?>
