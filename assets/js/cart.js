const carrinhoProdutos = localStorage.cart ? JSON.parse(localStorage.cart) : []

const gridCarrinho = document.querySelector(".grid-cart")

let valorTotal = 0
for(i = 0; i < carrinhoProdutos.length; i++){
    const cardProduto = `
    <div class="card-carrinho" style="position: relative;">
        <div class="imagem">
            <img class="img-prato" src="${carrinhoProdutos[i].imagemProduto}" alt="Prato">
        </div>
        <div class="infos-prato">
            <h3>${carrinhoProdutos[i].produto}</h3>
            <p>${carrinhoProdutos[i].descricao}</p>
        </div>

        <div style="position: absolute; right: 100px; top: 60px; display: flex; align-items: center; justify-content: flex-end; ">R$${carrinhoProdutos[i].preco}</div>
        
    </div>`
    gridCarrinho.innerHTML += cardProduto
    valorTotal += carrinhoProdutos[i].preco
}
document.querySelector('.valor-total').innerText = 'Total: R$' + valorTotal
const deletarProduto = e => {
    alert("Produtos excluídos")
    localStorage.setItem('cart', JSON.stringify([]))
    window.location.pathname = '/carrinho.html'

}

const finalizarPedido = () => {
    let email = document.querySelector('#email-input').value
    let telefone = document.querySelector('#tel-input').value

    if (!JSON.parse(localStorage.cart).length) {
        alert('Não há produtos no carrinho!');
        return
    }
    
    if (!email || !telefone) {
        alert('Por favor preencha seu e-mail e telefone!')
        return
    }
    
    
    let orders = localStorage.orders ? JSON.parse(localStorage.orders) : []
    orders.push({id: orders.length+1, total: valorTotal, orderDate: new Date(), email: email, telefone: telefone, products: [...JSON.parse(localStorage.cart)]})

    localStorage.setItem('orders', JSON.stringify(orders))
    localStorage.setItem('cart', JSON.stringify([]))

    window.location.pathname = '/delicio-fast/pedidos.html'

}