<?php
$servername = "mydb.ics.purdue.edu";
$username = "zeng274";
$password = "Wh0c@res?1234";
$dbname = "zeng274";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
?>
