function excluirMensagemErro() {
    let errorMessage = document.getElementById("msg-erro-index")

    if(errorMessage != null) {
        window.open("index.php", "_SELF")
    }
}

function excluirMensagemErroIdioma() {
    let errorMessage = document.getElementById("msg-erro-novo-idioma")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}

function excluirIdioma(idIdioma, nomeIdioma) {
    let excluirJogo = confirm("Realmente deseja excluir o idioma " + nomeIdioma + "?")

    if (excluirJogo == true) {
        window.open("excluir-idioma.php?id=" + idIdioma, "_SELF")
    }
    
}

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

function excluirMensagemErroNovaCategoria() {
    let errorMessage = document.getElementById("erro-msg-nova-categoria")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}


