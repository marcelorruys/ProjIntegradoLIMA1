const cardapioProdutos = [
    {
        codigoProduto: 1,
        produto:"X - Quase Tudo",
        preco: 29.99,
        descricao:"Completo com quase tudo",
        imagemProduto:"static/img/comidas/hambuguer-3.jpg"
    },
    {
        codigoProduto: 2,
        produto:"X - Ratão",
        preco: 29.99,
        descricao:"Completo com especial do Xef",
        imagemProduto:"static/img/comidas/hambuguer-1.jpg"
    },
    {
        codigoProduto: 3,
        produto:"X - Tudo e mais um pouco",
        preco: 29.99,
        descricao:"Completo com um pouco mais que tudo",
        imagemProduto:"static/img/comidas/hambuguer-2.jpg"
    },
    {
        codigoProduto: 4,
        produto:"Pizza Calabresa",
        preco: 39.99,
        descricao:"Completo - Calabresa",
        imagemProduto:"static/img/comidas/pizza-3.jpg"
    },
    {
        codigoProduto: 5,
        produto:"Pizza Bacon",
        preco: 39.99,
        descricao:"Completo - Bacon",
        imagemProduto:"static/img/comidas/pizza-1.jpg"
    },
    {
        codigoProduto: 6,
        produto:"Pizza Especial",
        preco: 39.99,
        descricao:"Receita da casa",
        imagemProduto:"static/img/comidas/pizza-2.jpg"
    }
]

const gridProduto = document.querySelector("#cardCatalogoProduto")

for(i = 0; i < cardapioProdutos.length; i++){
    const cardProduto = 
    `<a href="produto.html#${cardapioProdutos[i].codigoProduto}" class="card-produto bloco-3">
    <div class="imagem">
        <img src="${cardapioProdutos[i].imagemProduto}" alt="Prato">
    </div>
    <div class="infos-prato">
        <h3>${cardapioProdutos[i].produto}</h3>
        <p>${cardapioProdutos[i].descricao}</p>
    </div>
</a>`
    gridProduto.innerHTML += cardProduto
}
						
					
				
						
					
					
						
				
						
						
					
					
						
						
					
						
					
						
						
					