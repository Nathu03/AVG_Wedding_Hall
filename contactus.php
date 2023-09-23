<?php

include("db_connect.php");
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$country = $_POST["country"];
$subject = $_POST["subject"];


	  $sql1 = "INSERT INTO `contact`(`firstname`,`lastname`, `country`,`subject`) VALUES ('$firstname','$lastname', '$country','$subject')";
    $result1 = mysqli_query($con,$sql1) or die(mysqli_error($con));
?>
    <script type="text/javascript">
setTimeout("location.href = 'Index.html';",0);
    </script>

