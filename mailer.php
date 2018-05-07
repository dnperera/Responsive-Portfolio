<?php
require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to use SMTP
$mail->Host = "box5176.bluehost.com";//"mail.dayanperera.com";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "dayannp@dayanperera.com";  // SMTP username
$mail->Password = "Dphp94903$"; // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted


$mail->From = $_POST['email'];//"reply-support@udacity.com";
$mail->FromName = $_POST['name'];
$mail->AddAddress("dayannp@dayanperera.com", "Dayan Perera");

$mail->WordWrap = 50;                                 // set word wrap to 50 characters
$mail->IsHTML(true);                                  // set email format to HTML
$mail->Subject = $_POST['subject'];
$mail->Body    =  $_POST['message'];
$mail->AltBody =  $_POST['message'];

if(!$mail->Send())
{
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Message has been sent";
?>