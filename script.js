const films = [
    {
        naziv: "Die Hard 2",
        ocjena: 8.5,
        opis: "Zanr: akcija",
        cijena: 30,
        slika: "images/diehard.jpg"
    },
    {
        naziv: "Dumb & Dumber",
        ocjena: 7.0,
        opis: "Zanr: komedija",
        cijena: 25,
        slika: "images/dumbdumber.jpg"
    },
    {
        naziv: "Finding Nemo",
        ocjena: 9.0,
        opis: "Zanr: animirani",
        cijena: 35,
        slika: "images/nemo.webp"
    }
];

let totalSpent = 0;

function renderFilms() {
    const filmList = document.getElementById('filmList');
    filmList.innerHTML = '';

    films.forEach((film, index) => {
        const filmElement = document.createElement('div');
        filmElement.className = 'film';
        filmElement.innerHTML = `
            <img src="${film.slika}" alt="${film.naziv}">
            <div>
                <h3>${film.naziv}</h3>
                <p>Ocjena: ${film.ocjena}</p>
                <p>${film.opis}</p>
                <p class="price">Cijena gledanja: ${film.cijena} kn</p>
                <button onclick="watchFilm(${index})">Gledaj</button>
            </div>
        `;
        filmList.appendChild(filmElement);
    });
}

function watchFilm(index) {
    const film = films[index];
    const filmElement = document.getElementsByClassName('film')[index];
    if (!filmElement.classList.contains('watched')) {
        filmElement.classList.add('watched');
        totalSpent += film.cijena;
        document.getElementById('totalSpent').textContent = totalSpent;
    }
}

renderFilms();
