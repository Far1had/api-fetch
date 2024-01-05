# Projekt-Picsum Readme

Dies ist die Readme-Datei für das Projekt-Picsum, ein Übungsprojekt von [SuperCode.de](https://www.supercode.de) und designt von Farhad Amini.

## HTML-Datei (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projekt-Picsum</title>
</head>
<body>
    <h1>Bilder Galerie</h1>
    <figure id="products"></figure>

    <script src="./assets/js/../js/main.js"></script>
</body>
</html>


# Lokale Fetch-Anfragen (main.js)

// Lokale Fetch-Anfragen
fetch("./assets/data/main2.json")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

fetch("./assets/data/main2.json")
    .then((response) => response.json())
    .then((data) => {
        // JavaScript-Code zur Verarbeitung der Daten und Anzeige in der Galerie
        // ...
    })
    .catch((error) => console.error("Fehler beim Laden der Daten:", error));

# CSS-Stil (style.css)
@font-face {
    font-family: 'inter';
    src: url(../fonts/Inter/static/Inter-Regular.ttf);
}
@font-face {
    font-family: 'inter-bold';
    src: url(../fonts/Inter/static/Inter-Bold.ttf);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;   
    margin-top: 2%;
}

body {
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-family: 'inter';
    background-color: white;
}
button {
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    font-family: inter-bold;
    width: 150px;
    height: 60px;
    border-radius: 666px;
    border: 9px outset burlywood;
}

h1{
    background-color: brown;
    color: burlywood;
    font-family: inter-bold;
    font-size: 1.5em;
    border: 21px outset burlywood;
    border-radius: 18px;
    height: 110px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;

    
}
a {
    text-decoration: none;
    color: black;
}
div {
     padding: 10px;
    /* border-radius: 18px; */
    display: flex;
    justify-content: center;
    /* border: 15px outset pink; */
  }
  
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  img{
    margin-bottom: 5%;
    border-radius: 666px;
    border: 19px inset brown;
  }
  
  figcaption{
    margin-bottom: 5%;
    font-family: inter-bold;
  }
  button:hover {
   border-radius: 50px;
    border: 13px outset brown;
    background-color: burlywood;
    color: brown;
}
#  Designet von Farhad Amini

Übungsprojekt von SuperCode.de

In dieser Readme-Datei finden Sie die Struktur der HTML-Datei, den JavaScript-Code für lokale Fetch-Anfragen und den CSS-Stil für das Projekt-Picsum. Bitte passen Sie den Code entsprechend Ihren Anforderungen an.

