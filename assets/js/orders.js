const data = localStorage.orders ? JSON.parse(localStorage.orders) : []

console.log(data)
const gridPedidos = document.querySelector(".grid-orders")

let valorTotal = 0
for(i = 0; i < data.length; i++){
    const cardProduto = `
    <div class="card-carrinho" style="position: relative;">
        <div class="imagem">
            <img class="img-prato" src="${data[i].products[0].imagemProduto}" alt="Prato">
        </div>
        <div class="infos-prato">
            <h3>Pedido #${data[i].id} | ${data[i].products[0].produto}</h3>
            <p>${data[i].products[0].descricao}</p>
            <p style="margin-bottom: 0px;">Email: ${data[i].email}</p>
            <p style="margin-top: 4px;">Telefone: ${data[i].telefone}</p>
        </div>
        <div style="position: absolute; right: 180px; top: 60px; display: flex; align-items: center; justify-content: flex-end; ">R$${data[i].total}</div>
        <div style="position: absolute; right: 60px; top: 60px; display: flex; align-items: center; justify-content: flex-end; ">${new Date(data[i].orderDate).getDate()}/${new Date(data[i].orderDate).getMonth()}/${new Date(data[i].orderDate).getFullYear()}</div>
    </div>`
    gridPedidos.innerHTML += cardProduto
}