<?php 
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	require("cn.php");
	$con=retornarConexion();
	$sql="SELECT * FROM consultas";
	$registros=mysqli_query($con, $sql);
	$vec=[];  
	while ($reg=mysqli_fetch_array($registros)){
		$vec[]=$reg;
	}
	$cad=json_encode($vec);
	echo $cad;
	//header('Content-Type: application/json');
?>