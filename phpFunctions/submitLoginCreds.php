<?php
include 'UserManagement';
$email = $_REQUEST["newEmail"];
$username = $_REQUEST["fullname"];
$password = $_REQUEST["newPassword"];
$Management = new Management;
$Management->AddUser($email, $username, $password);
?> 