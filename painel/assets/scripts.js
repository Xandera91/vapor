//start index
function excluirMensagemErro() {
    let errorMessage = document.getElementById("msg-erro-index")

    if(errorMessage != null) {
        window.open("index.php", "_SELF")
    }
}
//end index

//start idioma
function excluirMensagemErroIdioma() {
    let errorMessage = document.getElementById("msg-erro-novo-idioma")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}

function excluirIdioma(idIdioma, nomeIdioma) {
    let excluirIdioma = confirm("Realmente deseja excluir o idioma " + nomeIdioma + "?")

    if (excluirIdioma == true) {
        window.open("excluir-idioma.php?id=" + idIdioma, "_SELF")
    }
    
}
//end idioma

///start jogo
function excluirMensagemErroNovoJogo() {
    let errorMessage = document.getElementById("erro-msg-novo-jogo")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}

function excluirJogo(idJogo, nomeJogo) {
    let excluirJogo = confirm("Realmente deseja excluir " + nomeJogo + "?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
    }
    
}
//end jogo

//start plataforma
function excluirMensagemErroNovaPlataforma() {
    let errorMessage = document.getElementById("erro-msg-nova-plataforma")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}

function excluirPlataforma(idPlataforma, nomePlataforma) {
    let excluirPlataforma = confirm("Realmente deseja excluir a plataforma " + nomePlataforma + "?")

    if (excluirPlataforma == true) {
        window.open("excluir-plataforma.php?id=" + idPlataforma, "_SELF")
    }
    
}

//end plataforma

//start categoria
function excluirCategoria(idCategoria, nomeCategoria) {
    let excluirCategoria = confirm("Realmente deseja excluir a categoria " + nomeCategoria + "?")

    if (excluirCategoria == true) {
        window.open("excluir-categoria.php?id=" + idCategoria, "_SELF")
    }
    
}

//end categoria


