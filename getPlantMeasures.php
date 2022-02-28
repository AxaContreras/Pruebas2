<?php
include 'db_connection.php';

$conn = OpenCon();




$sql = "SELECT*FROM plantas where IdPlant='".$_POST["IdPlant"]."'";
$result = mysqli_query($conn, $sql);
$data = array();
foreach ($result as $row) {
    $data[] = $row;
}
print json_encode($data);
Hola hehehe