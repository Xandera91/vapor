//start index
// function excluirMensagemErro() {
//     let errorMessage = document.getElementById("msg-erro-index")

//     if(errorMessage != null) {
//         window.open("index.php", "_SELF")
//     }
// }

function focusOnFirstInput() {
    const firstInput = document.getElementById("user")
    firstInput.focus()
}

function removerElementoPorId(idElemento) {
    let elemento = document.getElementById(idElemento)

    if(elemento != null) {
        elemento.remove()
    }
}
//end index

//start idioma
// function excluirMensagemErroIdioma() {
//     let errorMessage = document.getElementById("msg-erro-novo-idioma")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }

function excluirIdioma(idIdioma, nomeIdioma) {
    let excluirIdioma = confirm("Realmente deseja excluir o idioma " + nomeIdioma + "?")

    if (excluirIdioma == true) {
        window.open("excluir-idioma.php?id=" + idIdioma, "_SELF")
    }
    
}
//end idioma

///start jogo
// function excluirMensagemErroNovoJogo() {
//     let errorMessage = document.getElementById("erro-msg-novo-jogo")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }

function excluirJogo(idJogo, nomeJogo) {
    let excluirJogo = confirm("Realmente deseja excluir " + nomeJogo + "?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
    }
    
}
//end jogo

//start plataforma
// function excluirMensagemErroNovaPlataforma() {
//     let errorMessage = document.getElementById("erro-msg-nova-plataforma")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }

function excluirPlataforma(idPlataforma, nomePlataforma) {
    let excluirPlataforma = confirm("Realmente deseja excluir a plataforma " + nomePlataforma + "?")

    if (excluirPlataforma == true) {
        window.open("excluir-plataforma.php?id=" + idPlataforma, "_SELF")
    }
    
}

//end plataforma

//start categoria
// function excluirMensagemErroNovaCategoria() {
//     let errorMessage = document.getElementById("erro-msg-nova-categoria")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }

function excluirCategoria(idCategoria, nomeCategoria) {
    let excluirCategoria = confirm("Realmente deseja excluir a categoria " + nomeCategoria + "?")

    if (excluirCategoria == true) {
        window.open("excluir-categoria.php?id=" + idCategoria, "_SELF")
    }
    
}

//end categoria

//start mensagens
function arquivarMensagem(idMensagem) {
    let arquivarMensagem = confirm("Realmente deseja arquivar essa mensagem?")

    if (arquivarMensagem == true) {
        window.open("arquivar-mensagem-site.php?id=" + idMensagem, "_SELF")
    }
    
}
//end mensagens

//start administrador
function excluirMsgSuccessError() {


    let errorMessage1 = document.getElementById("msg-erro-novo-adm")

    if(errorMessage1 != null) {
        errorMessage1.remove()
    }


    let errorMessage2 = document.getElementById("msg-success-novo-adm")

    if(errorMessage2 != null) {
        errorMessage2.remove()
    }
    
}    
//end administrador

//dataHora
function obterDataHoraAtual() {
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
  
    let dia = data.getDate()
    let mes = data.getMonth()+1
    let ano = data.getFullYear()
  
    if(hora <= 9) {
      hora = "0" + hora
    }
  
    if(minuto <= 9) {
      minuto = "0" + minuto
    }
  
    if(segundo <= 9) {
      segundo = "0" + segundo
    }
  
    if(dia <= 9) {
      dia = "0" + dia
    }
  
    if(mes <= 9) {
      mes = "0" + mes
    }
  
    let horaAtual = hora + ":" + minuto + ":" + segundo
    let dataAtual = dia + "/" + mes + "/" + ano
  
    return dataAtual + " " + horaAtual
}
  
    let dataHora = obterDataHoraAtual()
  
    console.log(dataHora)
//end dataHora

