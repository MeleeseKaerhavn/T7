const myId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector("#single-view");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id")

fetch(`https://dummyjson.com/products/${myId}`)
.then((response) => response.json())
.then((data) => {
    console.log("Fetched data:", data);

    productContainer.innerHTML = `
<div class="margin_left">
    <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" alt="Billede">
    <h2>${data.title}</h2>
    <h3>${data.price},-</h3>
    <p>${data.description}</p>
    <div class="button"><p>Add to cart</p></div>
</div>

<div class="boks">
  <p>${data.rating}</p>
  <p>${data.reviewerName}</p>
  <p>${data.comment}</p>
</div>`
});