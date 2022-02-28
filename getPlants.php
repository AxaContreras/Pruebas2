<?php
include 'db_connection.php';

$conn = OpenCon();




$sql = "SELECT IdPlant, plant from plantas";
$result = mysqli_query($conn, $sql);
$data = array();
foreach ($result as $row) {
    $data[] = $row;
}
print json_encode($data);
