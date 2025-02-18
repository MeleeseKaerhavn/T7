const myId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector("#single-view");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("Fetched data:", data);

        productContainer.innerHTML = `
            <div class="margin_left">
                <img src="${data.thumbnail}" alt="${data.title}">
                <h2>${data.title}</h2>
                <h3>${data.price} kr.</h3>
                <p>${data.description}</p>
                <div class="button"><p>Add to cart</p></div>
            </div>

            <div class="boks">
                <p>Rating: ${data.rating}</p>
                <p>Brand: ${data.brand}</p>
                <p>Category: ${data.category}</p>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching product:', error));

