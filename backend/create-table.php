<?php
include 'db.php';
$sql = "CREATE TABLE IF NOT EXISTS user_profiles (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
title VARCHAR(255),
bio TEXT,
image_url VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($sql) === TRUE) {
echo "Table user_profiles created successfully<br>";
} else {
echo "<br>Error creating table: ". $conn -> error;
}
$conn->close();
?>
