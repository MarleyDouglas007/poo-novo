class Comida{

    constructor(descricao, unidadedeMedida, precoUnitario, foto){

        this.descricao = descricao;
        this.unidadedeMedida = unidadedeMedida;
        this.precoUnitario = precoUnitario;
        this.foto = foto;
    }
}

class Cardapio{

constructor(){

    this.listadeComidas = [];
}

adicionarComida(Comida){
    this.listadeComidas.push(Comida);
}
}