 // // ! LOKAL Fetch

fetch("./assets/data/main2.json")
.then((resp)=> resp.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))



fetch("./assets/data/main2.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data; 

        products.forEach((product) => {
            const productImageURL = product.download_url;
            const productAuthor = product.author;

            const figureElement = document.createElement("figure");


            const imageElement = document.createElement("img");
            imageElement.src = productImageURL;
            imageElement.alt = productAuthor;

            const figcaptionElement = document.createElement("figcaption");
            figcaptionElement.textContent = productAuthor;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "See More";
            buttonElement.addEventListener("click", () => {

                console.log(`See more button clicked for author: ${productAuthor}`);
            });


            figureElement.appendChild(imageElement);
            figureElement.appendChild(figcaptionElement);
            figureElement.appendChild(buttonElement);


            document.querySelector("#products").appendChild(figureElement);
        });
    })
    .catch((error) => console.error("Fehler beim Laden der Daten:", error));
    

    // // ! LOKAL Fetch

