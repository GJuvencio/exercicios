window.onload = function (e) {
    //Vamos programar aqui!


    var btnRecuperarSenha = document.getElementById("btnRecuperarSenha");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();


    btnRecuperarSenha.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Informe o seu e-mail");
        }
        else {
            recuperarSenha(email);
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

    function recuperarSenha(email) {

        alert("A recuperação de senha foi realizada com sucesso para o e-mail " + email);
    }
}