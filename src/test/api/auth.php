<?php
if(isset($_POST) && !empty($_POST)){
  $username=$_POST['username'];
  $password=$_post['password'];
  if($username=='admin' && $password='admin'){?>
  {
   "success":true,
   "message":"this is secret num one knows to admin"
  }<?php}
  else{?>
  {
    "success":false,
    "message":"invalid credentials"
  }<?php
}else{?>
{
    "success":false,
    "message":"only post access accepted"
}
<?php }}?>
