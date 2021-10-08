<?php
$json = file_get_contents('php://input');
$_POST = json_decode($json, true);
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];
$formcontent="Nome: $nome \nE-mail: $email \nTelefone: $telefone \nMensagem: $mensagem";
// $recipient = "thiagoprazeres@gmail.com";
$recipient = "contato@aboutlet.com.br";
$subject = "Formulario de contato Recife Outlet";
$mailheader = "From: ".'$email@server5.servhost.com.br'." \r\n";
mail($recipient, $subject, $formcontent) or die("Error!");
echo json_encode("Obrigado ");
