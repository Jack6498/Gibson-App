<?php
include 'UserManagement';
$email = $_POST["newEmail"];
$username = $_POST["fullname"];
$password = $_POST["newPassword"];
$Management = new Management;
$Management->AddUser($email, $username, $password);
?> 