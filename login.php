<?php
 $email = $_POST['email'];
 $password =$_POST['password'];
 

 //Database connection
 $con = new mysqli("localhost","root","","test");
    if($con->connect_error) {
        die("failure to connect : ".$con->connect_error );
    } else {
        $stmt = $con->prepare("Select * from registration where Enter_Email_ID =?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0) {
            $data = $stmt_result->fetch_assoc();
            if($data['Enter_Password'] === $password) {
                echo "<h2>Login Successfull</h2>"; 
            } else {
                echo "<h2> Invalid Email or Password </h2>";
            }
        
        }else{
            echo"<h2> Invalid Email -or- Password </h2>";   
        }
        

    }
?>

<script type="text/javascript">
setTimeout("location.href = 'Index.html';",0);
    </script>
