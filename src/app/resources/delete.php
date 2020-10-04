<?php 
  	header('Access-Control-Allow-Origin: *');
  	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	require("cn.php");	
	$con = retornarConexion();
	$sql = "DELETE FROM consultas WHERE id = $_GET[id]";
	mysqli_query($con, $sql);
	class Result { }
	$response = new Result();
	$response->resultado = 'ok';
	$response->mensaje = 'Articulo Borrado Correctamente!';

	header('Content-Type: application/json');
	echo json_encode($response);  
?>