<?php
include("db_connect.php");
$Enter_Name = $_POST["Enter_Name"];
$Enter_Email_ID = $_POST["Enter_Email_ID"];
$Enter_Username = $_POST["Enter_Username"];
$Enter_Password = $_POST["Enter_Password"];

//Database connection
//$conn = new mysqli('localhost','root','','test');
//if($conn->connect_error){
//    die('Connection Failed : '.$conn->connect_error);
//}else{
//    $stmt = $conn->prepare("insert into registration(Enter_Name, Enter_Email_ID, Enter_Username, Enter_Password)
//    values(?,?,?,?,?)");
//    $stmt->bind_param("sssssi", $Enter_Name, $Enter_Email_ID, $Enter_Username, $Enter_Password);
//    $stmt->execute();
//    echo "registration Successfully.....";
//    $stmt->close();
//    $conn->close();
//}

	  $sql1 = "INSERT INTO `registration`(`Enter_Name`,`Enter_Email_ID`, `Enter_Username`,`Enter_Password`) VALUES ('$Enter_Name', '$Enter_Email_ID', '$Enter_Username','$Enter_Password')";
    $result1 = mysqli_query($con,$sql1) or die(mysqli_error($con));
    //echo $last_id = mysqli_insert_id($con);
    ?>
    <script type="text/javascript">
setTimeout("location.href = '1-Index.html';",0);
    </script>
