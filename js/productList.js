const productContainer = document.querySelector(".products-grid"); // Min grid container der holder alle mine elementer i produktliste

fetch(`https://dummyjson.com/products`) // link til listen med alle productinformationer for alle id
    .then(response => response.json())
    .then(data => showList(data.products)); // Pass the 'products' array to the showList function

function showList(products) {
    let markup = "";
    products.map(product => { 
        markup +=
        `      
           <div class="product-card">
                <a href="https://dummyjson.com/products/${product.id}"><img src="${product.thumbnail}" alt="${product.title}"></a>
                <h3>${product.title}</h3>
                <p class="price">${product.price} kr.</p>
                <button class="buy-btn">Read more</button>
            </div>
        `;
    }).join(""); // join is redundant here but harmless
    productContainer.innerHTML = markup; // Insert the generated HTML
}
 