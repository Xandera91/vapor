function excluirMensagemErro() {
    let errorMessage = document.getElementById("msg-erro-index")

    if(errorMessage != null) {
        window.open("index.php", "_SELF")
    }
}

function excluirJogo(idJogo) {
    let excluirJogo = confirm("Realmente deseja excluir esse jogo?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
    }
    
}
