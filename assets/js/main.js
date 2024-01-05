 // // ! LOKAL Fetch

fetch("./assets/data/main2.json")
.then((resp)=> resp.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

fetch("./assets/data/main2.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data;

        const containerElement = document.createElement("article");
        containerElement.style.display = "flex";
        containerElement.style.flexWrap = "wrap";
        containerElement.style.justifyContent = "center";
        containerElement.style.gap = "20px"; 

        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.style.display = "flex";
            productDiv.style.flexDirection = "column";
            productDiv.style.justifyContent = "center";

            const figureElement = document.createElement("figure");

            const imageElement = document.createElement("img");
            imageElement.src = product.download_url;
            imageElement.alt = product.author;


            imageElement.style.width = "300px";
            imageElement.style.height = "200px";

            const figcaptionElement = document.createElement("figcaption");
            figcaptionElement.textContent = product.author;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "See More";

            imageElement.addEventListener("click", () => {
                window.location.href = product.download_url;
                
            })
            buttonElement.addEventListener("click", () => {
                window.location.href = product.url;
                
            });

            buttonElement.style.backgroundColor = "";

            figureElement.appendChild(imageElement);
            figureElement.appendChild(figcaptionElement);
            figureElement.appendChild(buttonElement);

            productDiv.appendChild(figureElement);
            
            containerElement.appendChild(productDiv);
        });

        document.querySelector("#products").appendChild(containerElement);
    })
    .catch((error) => console.error("Fehler beim Laden der Daten:", error));
