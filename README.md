# Teknisk dokumentation for Tema 7 gruppeprojekt
Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:
Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.
- Hvordan organiserer I billeder, fonte og andre ressourcer? Vi laver mapper i workspace med navnene "css", "img", "js", "font"
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)? De ligger respektive mapper
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning? respektive mapper

## Navngivning:
Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.
- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)  singleView (ingen mellemrund, med camelCase, ingen tegnsætning
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen? navngivet efter HTML partner

## Link til scripts:
- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)?  sidst i body uden defer

## Git branches:
- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)   Eget navn-feature-navn på feature

## Arbejdsflow:
- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?  Vi deler det ud på forhånd
- Hvordan sikrer I, at commit-beskeder er beskrivende?  skriver en beskrivende besked, eller forklarer over skrift ens tanker
- Hvordan kommunikerer i om ændringer i main branchen når feature merges? Puller ved nyeste branch

## Kode:
- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)   Fat arrows
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS) Vi følger layoutdiagrammet
- Skal filer have korte forklaringer som kommentarer? nej tak

# Funktionalitet
Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

-At lande på et landing page uden et overvælg af produkter
-at kunnne navigere til kataloget på flere måder efter præference
- at få vist produkterne dynamisk vha APIen
- At kunne efterlade reviews af hvert produkt
- At kunne læse andres reviews af produktet


# API endpoints
Dette afsnit skal liste de endpoints fra API'et i har benyttet:
- (fx. https://dummyjson.com/products)
- https://dummyjson.com/products?id=X
- https://dummyjson.com/products/id

# Dokumentation af Funktion 
Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter: 

- Beskrivelse:  henter produktdata fra API'et baseret på et produkt-ID fra URL. Funktionen indsætter oplysninger, billede og anmeldelse i HTML-en i #single-view.
- Parametre: tager id fra URLen
- Returnerer: manipulerer DOM’en med innerHTML
- Eksempel på brug: 
```javascript



//Javascript kode fra opgave:

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

```
