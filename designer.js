function desenharCards(cardapio,divContainer){

    divContainer.innerHTML = ""

for (let i = 0; i < comide.listadeComidas.length; i++){
    console.log("teste")
    divContainer.innerHTML +=`
    
    <div class = "card">
        <div>${cardapio.listadeComidas[i].descricao}</div>
        <div>${cardapio.listadeComidas[i].unidadeDeMedida}</div>
        <div>${cardapio.listadeComidas[i].precoUnitario}</div>
    
    </div>
    
   `;
}
}



