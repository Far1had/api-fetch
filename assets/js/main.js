 // // ! LOKAL Fetch

fetch("./assets/data/main2.json")
.then((resp)=> resp.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

fetch("./assets/data/main2.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data;

        // Erstelle einen Container für die figure-Elemente
        const containerElement = document.createElement("article");
        containerElement.style.display = "flex";
        containerElement.style.flexWrap = "wrap";
        containerElement.style.justifyContent = "center";
        containerElement.style.gap = "20px"; // Abstand zwischen den divs

        products.forEach((product) => {
            // Erstelle ein div für jedes Produkt
            const productDiv = document.createElement("div");
            productDiv.style.display = "flex";
            productDiv.style.flexDirection = "column";
            productDiv.style.justifyContent = "center";

            const figureElement = document.createElement("figure");

            const imageElement = document.createElement("img");
            imageElement.src = product.download_url;
            imageElement.alt = product.author;

            imageElement.style.width = "300px";
            imageElement.style.height = "300px";

            const figcaptionElement = document.createElement("figcaption");
            figcaptionElement.textContent = product.author;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "See More";

            // Füge einen Event-Listener für den Button hinzu
            buttonElement.addEventListener("click", () => {
                window.location.href = product.url;
            });

            // Füge eine pinkfarbene Hintergrundfarbe für den Button hinzu
            buttonElement.style.backgroundColor = "rgb(243, 9, 212)";

            figureElement.appendChild(imageElement);
            figureElement.appendChild(figcaptionElement);
            figureElement.appendChild(buttonElement);

            productDiv.appendChild(figureElement);
            
            // Füge das Produkt-Div zum Container hinzu
            containerElement.appendChild(productDiv);
        });

        // Füge den Container zum Dokument hinzu
        document.querySelector("#products").appendChild(containerElement);
    })
    .catch((error) => console.error("Fehler beim Laden der Daten:", error));
