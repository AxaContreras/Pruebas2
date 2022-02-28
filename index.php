<?php
    include 'db_connection.php';

    $conn = OpenCon();
    $tipo = $_POST["option"];
    $hoy = date('Y-m-d H:i:s"');

    

    if($tipo == 'loginQuery'){
        $nombre = utf8_decode($_POST["nombre_M"]);
        $temperatura = $_POST["temperatura_M"];
        $humedad = $_POST["humedad_M"];
        $luminosidad = $_POST["luminosidad_M"];
        
        $sql = "INSERT INTO registros (nombre_M, temperatura_M, humedad_M, luminosidad_M, fecha) VALUES ('".$nombre."', '".$temperatura."', '".$humedad."', '".$luminosidad."', '".$hoy."')";

            if($conn->query($sql))
            {
                echo "Ok";
                return;   
            }       
            else
            {
                echo "Error";
                return;
            }
    }

    if($tipo == 'selectR')
    {
        $array = array();
        $sql = "SELECT id_Reg, nombre_M, temperatura_M, humedad_M, luminosidad_M, fecha FROM registros";
        $consulta=$conn->query($sql);
        $x=0;

        foreach ($consulta as $key){
            $array[$x]['id'] = $key['id_Reg'];
            $array[$x]['nombre'] = $key['nombre_M'];
            $array[$x]['temperatura'] = $key['temperatura_M'];
            $array[$x]['humedad'] = $key['humedad_M'];
            $array[$x]['luminosidad'] = $key['luminosidad_M'];
            $array[$x]['fecha'] = $key['fecha'];
            $x++;
            //$array[] = $key;
        }        
        echo json_encode($array);   
    }
Se cambio el origin je
?>