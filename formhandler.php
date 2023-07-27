<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'jezb03@outlook.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Subject: $subject.\n".
                "User Message: $message.\n";

$to = 'jezb03@outlook.com';

$headers = "FROM: $email_from \r\n";

$headers .= "REPLY TO: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);
header("Location: contact.html");
?>