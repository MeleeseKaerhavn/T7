
const productContainer = document.querySelector(".card-container"); // Min grid container der holder alle mine elementer i produktliste

fetch(`https://dummyjson.com/products?limit=4`) // link til listen med alle productinformationer for alle id
    .then(response => response.json())
    .then(data => showList(data.products)); 

function showList(products) {
    let markup = "";
    products.map(product => { 
        markup +=
        `      
           
            <div class="card-container">
                <div class="card">
                <a href="product.html?id=${product.id}"><img src="${product.thumbnail}" alt="${product.title}"></a>
                <h3>${product.title}</h3>
                <p class="price">${product.price} kr.</p>
                <button class="buy-btn"><a href="product.html?id=${product.id}">Read more</a></button>
            </div>
                </div>
        `;
    }).join(""); 
    productContainer.innerHTML = markup; 
}