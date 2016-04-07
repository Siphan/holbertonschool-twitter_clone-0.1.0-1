<?php
session_start();
if (isset($_COOKIE['login'])) {
  unset($_COOKIE['login']);
  setcookie("login", "", 1, "/php", "johnserrano.tech");
}
$_SESSION["logged_in"] = false;
$_SESSION["user"] = false;
?>
<!DOCTYPE html>
<script type="text/javascript">
  window.location.replace("http://johnserrano.tech/php/index.php");
</script>
