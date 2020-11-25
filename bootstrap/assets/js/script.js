

/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: geteElementById()
por Nome: getElementByName()
por Classe: geteElementByClassName()
por Selector: querySelector()--> mais novo mais usado
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width='100%'

function validaNome()
{
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3)
    {
       txtNome.innerHTML = ('Nome inválido')
       txtNome.style.color = 'red'
    }else
    {
        txtAssunto.style.display = 'none'
        nomeOk = true
    }
}

function enviar()
{
    if(nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert('Formulário enviado com sucesso!')
    }else
    {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1 ||email.value.indexOf('.')== -1 )
    {
       txtEmail.innerHTML = ('Email inválido')
       txtEmail.style.color = 'red'
    }
    else
    {
       emailOk = true
        txtAssunto.style.display = 'none'
    }
}

function validaAssunto()
{
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100)
    {
        txtAssunto.innerHTML = 'Texto é muito grande, escreva no máximo 100 caracteres'
        txtAssunto.style.color = 'orange'
        txtAssunto.style.display = 'block'
    }else
    {
        assuntoOk = true
        txtAssunto.style.display = 'none'
    }

}

function mapaZoom()
{
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal()
{
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

