<?php
require('./modulos/header.php');
$error = $_GET['error'] ??null;

$query_categoria = "SELECT * FROM categoria ORDER BY nome ASC";
$categorias = mysqli_query($conn, $query_categoria);

?>

<form action="cadastrar-jogo.php" method="post">
    <h3 class="h3jogo">Informe os seguintes dados:</h3>
    <div onclick="removerElementoPorId('erro-msg-novo-jogo')" id="form-create">
        <p>Nome*</p>
        <input onkeyup="capsLock(this)" type="text" name="name-game" id="name-game" required>
        <br></br>
        <p>Valor*</p>
        <input type="number" name="price-game" id="price-game" min="0" required>
        <br></br>
        <p>Imagem*</p>
        <input type="url" name="image-game" id="image-game" required>
        <br></br>
        <p>Video</p>
        <input type="text" name="movie-game" id="movie-game">
        <br></br>
        <p>Lançamento*</p>
        <input type="date" name="date-game" id="date-game" required>
        <br></br>
        <p>Desenvolvedora*</p>
        <input type="text" name="dev-game" id="dev-game" required>
        <br></br>
        <p>Categoria*</p>
        <select name="category-game" id="category-game">
            <option value="" disabled selected>Selecione</option>

            <?php while ($categoria = mysqli_fetch_array($categorias)) {?>
                <option value="<?=$categoria['id']?>"><?=$categoria['nome']?></option>
            <?php } ?>
        </select>
        <br></br>
        <p>Descrição*</p>
        <textarea name="description-game" id="description-game" cols="60" rows="7"></textarea>
    </div>

    <?php if ($error != null) {?>
        <div id="erro-msg-novo-jogo" class="error-new-game"><?=$error?></div>
    <?php } ?>

    <div>
    <button type="submit" id="button">Salvar</button>
    </div>
</form>

<?php require('./modulos/footer.php'); ?>