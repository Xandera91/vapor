<?php
    require('./modulos/header.php');
    $error = $_GET['error'] ?? null;
?>

<form action="cadastrar-idioma.php" method="post">
    <div id="form-create">
        <p>Novo Idioma</p>
        <input onclick="excluirMensagemErroIdioma()" type="text" name="idiom" id="idiom" placeholder="Idioma">
        <br></br>
        <button type="submit">Salvar</button>
    </div>
</form>

<?php if ($error != null) { ?>
    <div id="msg-erro-novo-idioma" class="error-idioma"><p><?=$error?></p></div>
    <?php } ?>

<?php
    require('./modulos/footer.php');
?>