<?php

$host = 'localhost';        
$dbname = 'cadastro_usuarios'; 
$username = 'root';         
$password = '';            

try {
   
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}
?>
