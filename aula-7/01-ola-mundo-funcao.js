window.onload = function (e) {
    //Vamos programar aqui!


    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var mensagem = "Olá mundo!";

        exibirMensagem(mensagem);
    };

    function exibirMensagem(mensagem) {
        alert(mensagem);

    }
}