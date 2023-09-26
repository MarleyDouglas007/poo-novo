let inputdescricao = document.getElementById("iptdescricao");
let inputunidadedeMedida = document.getElementById("iptunidadedeMedida");
let inputprecoUnitario = document.getElementById("iptprecoUnitario");
let buttonCadastrar = document.getElementById("btnCadastrar");
let divContainerCards = document.getElementById("containerDeCards")

buttonCadastrar.addEventListener("click", quandoClicarEmCadastrar);

let comide = new Cardapio("Novo Cardapio");

function quandoClicarEmCadastrar() {
    let comidaTemp = new Comida(
        inputdescricao.value,
        inputunidadedeMedida.value,
        inputprecoUnitario.value,
        ""
    );

    comide.adicionarComida(comidaTemp);
    desenharCards(comide, divContainerCards);
}