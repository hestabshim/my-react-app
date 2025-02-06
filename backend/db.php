<?php
$servername = "mydb.ics.purdue.edu";
$username = "yourusername";
$password = "your password";
$dbname = "yourusername";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
?>
