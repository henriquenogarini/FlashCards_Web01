function deletar(){
            
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var btnS = document.getElementById("btnSim");
    var btnC = document.getElementById("btnCancelar");

    modal.style.display = "block";

    btnS.onclick = function() {
        modal.style.display = "none";
    }

    btnC.onclick = function() {
        modal.style.display = "none";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function descobrir(hide){
    document.getElementById(hide).style.visibility = "visible"
}

function enviarDados(){

    var nomeCa = document.getElementById("nomeC").value
    var emailCa = document.getElementById("emailC").value
    var senhaCa = document.getElementById("pwdC").value
    var rsenhaCa = document.getElementById("rpwdC").value
    var valida = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var verifica1 = true
    var verifica2 = true

    if(senhaCa !== rsenhaCa){
        verifica1 = false
        document.getElementById("senhaIncorreta").style.visibility = "visible"
        event.preventDefault()
    }
    else{
        verifica1 = true
        document.getElementById("senhaIncorreta").style.visibility = "hidden"
    }

    if (emailCa.match(valida)){
        verifica2 = true
        document.getElementById("emailIncorreto").style.visibility = "hidden"
    }
    else{
        verifica2 = false
        document.getElementById("emailIncorreto").style.visibility = "visible"
        event.preventDefault()
    }

    if(verifica1 == true && verifica2 == true){
        alert("Nome: "+nomeCa+"\nE-mail: "+emailCa+"\nSenha: "+senhaCa+"\nSenha repetida: "+rsenhaCa)
    }

}

function login(){

    var emailLo = document.getElementById("emailLogin").value
    var valida = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var verifica = true

    if (emailLo.match(valida)){
        verifica = true
        document.getElementById("emailIncorreto").style.visibility = "hidden"
    }
    else{
        verifica = false
        document.getElementById("emailIncorreto").style.visibility = "visible"
        event.preventDefault()
    }   
}

function addElement() {

    var frente = document.querySelector("#novoFrente").value

    var novoElemento = document.createElement("li")
    var textElemento = document.createTextNode(frente)

    novoElemento.append(textElemento)

    var myUL = document.querySelector("#listaCards")

    myUL.appendChild(novoElemento)

}