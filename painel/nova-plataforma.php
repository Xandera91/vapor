<?php
    require('./modulos/header.php');
    $error = $_GET['error'] ?? null;
?>

<form action="cadastrar-plataforma.php" method="post">
    <div id="form-create">
        <p>Nova Plataforma</p>
        <input onkeyup="capitalizeFirstLetter(this)" onclick="removerElementoPorId('erro-msg-nova-plataforma')" type="text" name="platform" id="platform" placeholder="Plataforma">
        <br></br>
        <button type="submit">Salvar</button>
    </div>
</form>

<?php if ($error != null) { ?>
    <div id="erro-msg-nova-plataforma" class="error-idioma"><p><?=$error?></p></div>
    <?php } ?>

<?php
    require('./modulos/footer.php');
?>