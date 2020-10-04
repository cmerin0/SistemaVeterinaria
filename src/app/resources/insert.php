<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input');
  $params = json_decode($json);
  require("cn.php");
  $con = retornarConexion();
  $sql = "INSERT INTO `consultas` (`id`, `nombre`, `dui`, `mascota`, `tratamiento`, `medicamento`, `costo`, `visita`)VALUES (NULL, '$params->nombre', '$params->dui', '$params->mascota', '$params->tratamiento', '$params->medicamento', $params->costo, $params->visita)";
  mysqli_query($con, $sql);
  class Result {}
  $response = new Result();
  $response->resultado = 'ok';
  $response->mensaje = 'Datos Guardados con Exito!';
  header('Content-Type: application/json');
  echo json_encode($response);  
?>