function photographerFactory(data) {
    const { name, city, tagline, country, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );//créer un élement article 
        const img = document.createElement( 'img' );//Créer un élement img
        img.setAttribute("src", picture)//Affecter une image et une src
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        const p = document.createElement('p');
        p.textContent = tagline;
        article.appendChild(img);//Ajouter l'élement img
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        return (article);
    }
    return { name, city, tagline, country, picture, getUserCardDOM }
}