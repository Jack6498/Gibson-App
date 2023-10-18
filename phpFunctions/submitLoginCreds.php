<?php

$fullName = $_POST['fullName'];
$newEmail = $_POST['newEmail'];
$newPassword = $_POST['newPassword'];


// I need to verify that these are the right credientals
$servername = "192.185.16.86";
$username = "wcsccsco_stu";
$password = "Knights#23!!";
$database = "userInfo";
$port = 3306;

// Create a MySQLi database connection
$conn = new mysqli($servername, $username, $password, $database);


// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to insert user data into a table (e.g., users)
$sql = "INSERT INTO `userInfo`(`email`, `username`, `pwd`, `type`) VALUES ('$newEmail','$fullName','$newPassword','teacher')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();

?>