<?php 
    require('./modulos/conexao.php');

    $nome_plataforma = ucfirst(mb_strtolower($_POST['platform'])) ?? null;

    $consultar_plataforma = "SELECT nome FROM plataforma WHERE nome = '{$nome_plataforma}'";

    $criar_plataforma = "INSERT INTO plataforma (nome) VALUES ('{$nome_plataforma}')";

    $plataforma = mysqli_fetch_assoc(mysqli_query($conn, $consultar_plataforma));

    if($plataforma == null) {
        mysqli_query($conn, $criar_plataforma);
        header('location: plataformas.php');
    } else {
        header('location: nova-plataforma.php?error=Plataforma já cadastrada!');
    }
?>