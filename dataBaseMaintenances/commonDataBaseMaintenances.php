<?php
require 'connectToDataBase.php';
function consult(){
$response;
$sql = $_POST['query']; 
global $conecta;
 $result = mysqli_query( $conecta, $sql);
 $response = "[";  
 while($consulta = mysqli_fetch_assoc($result)) {
  $response .= "{";  
  foreach($consulta as $key => $value){ 
    $response .= '"'.$key.'":"'.$value.'",';
   }
   $response .= "},";
 }
 $response .= "]"; 
 $response = str_replace(",},","},",$response);
 $response = str_replace(",]","]",$response);
 echo   $response; 
 mysqli_free_result($result);  
  mysqli_close($conecta); 
}

function insertUpDel(){
  $sql = $_POST['query'];
  global $conecta; 
  $result = mysqli_query( $conecta, $sql);   
   mysqli_close($conecta); 
   echo "ok";
}

switch ($_POST['requisitonType']) {
  case "consult":
    consult();
  break;
  case "insert":
  case "update":
  case "delete":
    insertUpDel();
  break;
}
?>