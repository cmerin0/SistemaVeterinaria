<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input');
  $params = json_decode($json);
  require("cn.php");
  $con = retornarConexion();
  $sql = "UPDATE consultas SET nombre='$params->nombre', mascota='$params->mascota', tratamiento='$params->tratamiento', medicamento='$params->medicamento', costo=$params->costo WHERE id=$params->id";
  mysqli_query($con, $sql);
  class Result {}
  $response = new Result();
  $response->resultado = 'ok';
  $response->mensaje = 'Datos Modificados con Exito!';
  header('Content-Type: application/json');
  echo json_encode($response);  
?>