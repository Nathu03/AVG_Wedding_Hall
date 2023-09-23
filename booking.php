<?php

include("db_connect.php");
$Customer_name = $_POST["Customer_name"];
$Customer_email = $_POST["Customer_email"];
$Customer_phone = $_POST["Customer_phone"];
$Amount_of_People = $_POST["Amount_of_People"];
$Decoration_colour = $_POST["Decoration_colour"];
$Allocated_date = $_POST["Allocated_date"];
$Occasion = $_POST["Occasion"];
$Customer_message = $_POST["Customer_message"];

	  $sql1 = "INSERT INTO `booking`(`Customer_name`,`Customer_email`, `Customer_phone`,`Amount_of_People`,`Decoration_colour`,`Allocated_date`, `Occasion`,`Customer_message`) VALUES ('$Customer_name', '$Customer_email', '$Customer_phone', '$Amount_of_People', '$Decoration_colour', '$Allocated_date', '$Occasion', '$Customer_message')";
      $result1 = mysqli_query($con,$sql1) or die(mysqli_error($con));
?>
    <script type="text/javascript">
setTimeout("location.href = 'Index.html';",0);
    </script>