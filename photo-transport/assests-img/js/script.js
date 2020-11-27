

/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: geteElementById()
por Nome: getElementByName()
por Classe: geteElementByClassName()
por Selector: querySelector()--> mais novo mais usado
*/



let nome = window.document.getElementById('exampleFormControlInput1-name')
let email = document.querySelector('#exampleFormControlInput1-email')
let mensagem = document.querySelector('#exampleFormControlTextarea1-text')
let img = document.querySelector('#img')
let nomeOk = false
let emailOk = false
let mensagemOk = false


nome.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#alertNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = ('<div class="alert alert-danger" role="alert"> O nome deve conter mais de 2 caracteres!</div>')
        txtNome.style.display = 'block'


    } else {
        txtNome.style.display = 'none'
        nomeOk = true
    }
}


function validaEmail() {
    let txtEmail = document.querySelector('#alertEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = ('<div class="alert alert-danger" role="alert"> Email inválido!</div>')
        txtEmail.style.display = 'block'
    }
    else {
        emailOk = true
        txtEmail.style.display = 'none'
    }
}

function validaTexto() {
    let txtAssunto = document.querySelector('#alertText')
    if (mensagem.value.length >= 100) {
        txtAssunto.innerHTML = ('<div class="alert alert-danger" role="alert"> Texto é muito grande, escreva no máximo 100 caracteres!</div>')
        txtAssunto.style.display = 'block'
    } else {
        assuntoOk = true
        txtAssunto.style.display = 'none'
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        let button = document.querySelector('#button')
        button.innerHTML = ('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>O formulário foi enviado com sucesso!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    } else {
        let button = document.querySelector('#button')
        button.innerHTML = ('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Preencha o formulário corretamente!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')

    }
}

function imgZoom() {
    img.style.width = '800px'
    img.style.height = '600px'
    
}

function imgNormal() {
    img.style.width = "400px"
    img.style.height = "400px"
}

