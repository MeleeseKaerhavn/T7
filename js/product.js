
const productContainer = document.querySelector("#single-view");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("Fetched data:", data);

        productContainer.innerHTML = `
            <div class="single">
                <div>
                <img src="${data.thumbnail}" alt="${data.title}">
                </div>
                <div>
                <h2>${data.title}</h2>
                <h3>${data.price} kr.</h3>
                <p>${data.description}</p>
                <div class="button"><p>Add to cart</p></div>
                </div>
                <form>
                    <label for="reviewName">Review Title:</label><br>
                    <input type="text" id="reviewName" name="reviewName" required><br><br>

                    <label for="rating">Rating:</label><br>
                    <select id="rating" name="rating" required>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Terrible</option>
                    </select><br><br>

                    <label for="reviewText">Your Review:</label><br>
                    <textarea id="reviewText" name="reviewText" rows="4"></textarea><br><br>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div class="product-info">
            <h1>Product Info:</h1>
            <div class="middle">
                <p>Brand: ${data.brand}</p>
                <p>Category: ${data.category}</p>
                <h5>Dimensions:</h5>
                <p>width:${data.dimensions.width}</p>
                <p>height:${data.dimensions.height}</p>
                <p>depth:${data.dimensions.depth}</p>
                <p>Rating: ${data.rating}</p>
                <hr>
                <h2>Review Title</h2>
                <h2>&#9733 &#9733 &#9734 &#9734 &#9734</h2>
                <hr class="short">
                <hr class="short">
                <hr class="short">
                

            </div>
            </div>
        `;
    })
   

