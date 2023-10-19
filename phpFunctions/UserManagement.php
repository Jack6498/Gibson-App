<?php
 class Management{
    private $servername = "localhost";
    private $DBusername = "wcsccsco_logit_admin";
    private $DBpassword = "Echo#Co-op18!";
    private $database = "wcsccsco_logit";
    private $port = 3306;
    private function connect(){
        $conn = new mysqli($this->servername, $this->DBusername, $this->DBpassword, $this->database, $this->port);
        return $conn;
    }
    public function AddUser($email, $username, $password) {

        if (!$this->CheckUserExists($username)) {
            $conn = $this->connect();
            $query = $conn->prepare("INSERT INTO `userInfo`(`email`, `username`, `pwd`, `type`) VALUES ('?','?','?','teacher')");
            $query->bind_param("sss", $email, $username, $password);
            $result = mysqli_query($conn, $query, MYSQLI_STORE_RESULT):: mysqli_result;
            $conn->close();
        }else{
            echo "User already exists";
        }

    } 
    public function DeleteUser($email, $username) {}
    public  function CheckUserExists($username) {
        $conn = $this->connect();
        $query = $conn->prepare("SELECT COUNT(*) from 'userInfo' where 'username' = '?'");
        $query->bind_param("?", $username);
        $result = mysqli_query($conn, $query, MYSQLI_STORE_RESULT):: mysqli_result;
        if ($result == 0) {
            return false;
        } else {
            return true;
        }
    }
    
}
?>