<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';
// Access text fields from the form submission
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$title = isset($_POST['title']) ? $_POST['title'] : '';
$bio = isset($_POST['bio']) ? $_POST['bio'] : '';
$image_url = " "; // placeholder for now
// Prepare and bind SQL
$stmt = $conn->prepare("INSERT INTO user_profiles (name, email,
title, bio, image_url) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $title, $bio,
$image_url);
// Execute query and check if successful
if ($stmt->execute()) {
echo json_encode(['success' => true, 'message' => 'Profile saved
successfully.']);
} else {
echo json_encode(['success' => false, 'message' => 'There was an
error saving the data.']);
}
$stmt->close();
$conn->close();
?>
