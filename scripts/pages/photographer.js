//tableau photographers contient les données des photographes
const photographers = [
    {
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "MimiKeel.jpg"
    },
    {
        "name": "Ellie-Rose Wilkens",
        "id": 930,
        "city": "Paris",
        "country": "France",
        "tagline": "Capturer des compositions complexes",
        "price": 250,
        "portrait": "EllieRoseWilkens.jpg"
    },
    {
        "name": "Tracy Galindo",
        "id": 82,
        "city": "Montreal",
        "country": "Canada",
        "tagline": "Photographe freelance",
        "price": 500,
        "portrait": "TracyGalindo.jpg"
    },
    {
        "name": "Nabeel Bradford",
        "id": 527,
        "city": "Mexico City",
        "country": "Mexico",
        "tagline": "Toujours aller de l'avant",
        "price": 350,
        "portrait": "NabeelBradford.jpg"
    },
    {
        "name": "Rhode Dubois",
        "id": 925,
        "city": "Barcelona",
        "country": "Spain",
        "tagline": "Je crée des souvenirs",
        "price": 275,
        "portrait": "RhodeDubois.jpg"
    },
    {
        "name": "Marcel Nikolic",
        "id": 195,
        "city": "Berlin",
        "country": "Germany",
        "tagline": "Toujours à la recherche de LA photo",
        "price": 300,
        "portrait": "MarcelNikolic.jpg"
    }
]

//la variable photographerHeader contient l'élément photograph-header
const photographHeader = document.getElementById('photograph-header');
const description = document.createElement('article');
photographHeader.appendChild(description);
const h2 = document.createElement('h2');
h2.textContent = photographers[0].name;
description.appendChild(h2);
const h3 = document.createElement('h3');
h3.textContent = photographers[0].city +  ", " + photographers[0].country;
description.appendChild(h3);
const p = document.createElement('p');
p.textContent = photographers[0].tagline;
description.appendChild(p);
const button = document.querySelector('.contact_button');
photographHeader.appendChild(button);
const picture = document.createElement('img');
picture.setAttribute("src", "assets/photographers/MimiKeel.jpg");
photographHeader.appendChild(picture);