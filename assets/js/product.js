const data = [
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


let productFiltered = data.filter(i => i.codigoProduto == window.location.hash.replace('#', ''));

const renderProduct = event => {
    let idProduct = window.location.hash.replace('#', '')
    if (idProduct == "") {
        window.location.hash = data[Math.trunc(Math.random() * (data.length - 1))].codigoProduto // Se não tiver nada no #, pega um elemento aleatório da array
    } 
    idProduct = window.location.hash.replace('#', '') // Verifica o ID do produto na URL após o # e extrai somente o número
    let productFiltered = data.filter(i => i.codigoProduto == idProduct)

    // Substitui a imagem
    let imgProduct = document.querySelector('.img-produto') || ''
    imgProduct.src = productFiltered[0].imagemProduto

    // Substitui o nome
    let titleProduct = document.querySelector('.nome-produto')
    titleProduct.innerText = productFiltered[0].produto

    // Substitui o preço
    let priceProduct = document.querySelector('.preco-produto')
    priceProduct.innerText = 'R$' + productFiltered[0].preco

    //Substitui a descrição
    let descriptionProduct = document.querySelector('.descricao-produto')
    descriptionProduct.innerText = productFiltered[0].descricao
}

renderProduct()
window.addEventListener("hashchange", e => renderProduct(e));

const adicionarCarrinho = ev => {

    let cart = localStorage.cart ? JSON.parse(localStorage.cart) : []
    localStorage.setItem('cart', JSON.stringify([...cart, productFiltered[0]]))
    
}