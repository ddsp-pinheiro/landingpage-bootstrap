let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let nomeOk =  false
let emailOk =  false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'NOME INVALIDO' 
        txtNome.style.color = 'darkred'
    }else{
        txtNome.innerHTML = 'NOME VALIDO'
        txtNome.style.color = 'white'
        nomeOk =  true
    }

}function validaEmail(){
    let txtEmail =document.querySelector('#txtEmail')
    if(email.value.indexOf('@' || '.com' ) == -1){
        txtEmail.innerHTML = 'EMAIL INVALIDO' 
        txtEmail.style.color = 'redarkred'
     }
     else{
        txtEmail.innerHTML = 'EMAIL VALIDO'
        txtEmail.style.color = 'white'
        emailOk =  true
     }
}

function enviar(){
    if(nomeOk == true && emailOk == true){
        alert('FORMULARIO ENVIADO')
    }else{
        alert('PREENCHA O FORMULARIO CORRETAMENTE')
    }
}