﻿window.onload = function (e) {
    //Vamos programar aqui!


    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var slcGenero = document.getElementById("slcGenero");

    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = txtSobrenome.value;

        var email = txtEmail.value;

        var telefone = txtTelefone.value;

        var genero = slcGenero.value;

        var senha = txtSenha.value;

        if (nome == "") {
            exibirMensagemErro("Informe o seu nome.");
        }
        else if (sobrenome == "") {
            exibirMensagemErro("Informe o seu sobrenome.");
        }
        else if (email == "") {
            exibirMensagemErro("Informe o seu e-mail.");
        }
        else if (telefone == "") {
            exibirMensagemErro("Informe o seu telefone.");
        }
        else if (senha == "") {
            exibirMensagemErro("Informe a sua senha.");
        }
        else {
            cadastrar(nome, sobrenome, email, telefone, genero, senha);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

    function cadastrar(nome, sobrenome, email, telefone, genero, senha) {

        alert("O cadastro foi realizado com sucesso para o usuário " + email);
    }
}