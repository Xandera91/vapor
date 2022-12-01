<?php
    require('./modulos/header.php');
    $error = $_GET['error'] ?? null;
?>

<form action="cadastrar-categoria.php" method="post">
    <div id="form-create">
        <p>Nova Categoria</p>
        <input onclick="excluirMensagemErroNovaCategoria()" type="text" name="category" id="category" placeholder="Categoria">
        <br></br>
        <button type="submit">Salvar</button>
    </div>
</form>

<?php if ($error != null) { ?>
    <div id="erro-msg-nova-categoria" class="error-idioma"><p><?=$error?></p></div>
    <?php } ?>

<?php
    require('./modulos/footer.php');
?>