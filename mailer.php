<?php
require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to use SMTP
$mail->Host = "box5176.bluehost.com";// specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "dayannp@dayanperera.com";  // SMTP username
$mail->Password = "Dphp94903$"; // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted

$mail->From = "reply-support@udacity.com";
$mail->FromName = "Davi ar Udacity";
$mail->AddAddress("dayannp@dayanperera.com", "Dayan Perera");

$mail->WordWrap = 50;                                 // set word wrap to 50 characters
$mail->IsHTML(true);                                  // set email format to HTML
$mail->Subject = "Build your own webpage";
$mail->Body    = "Knowing the fundamentals of programming lays the foundation for many careers, including data analysis, front-end, back-end, and mobile web development. By the end of the program, you'll become confident in your ability to think and problem-solve like a programmer, and you’ll be ready to dive deeper into any of those fields.";
$mail->AltBody = "Knowing the fundamentals of programming lays the foundation for many careers, including data analysis, front-end, back-end, and mobile web development. By the end of the program, you'll become confident in your ability to think and problem-solve like a programmer, and you’ll be ready to dive deeper into any of those fields.";

if(!$mail->Send())
{
   echo "Message could not be sent. 
";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Message has been sent";
?>