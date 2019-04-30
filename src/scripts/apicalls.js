const API = {
    getArtists: function () {
        return fetch("http://localhost:8088/artists")
        .then(results => results.json());
    },
    getLabels: function (label) {
        return fetch(`http://localhost:8088/labels?id=${label}`)
        .then(results => results.json());
    },
    getGenres: function (genre) {
        return fetch(`http://localhost:8088/genres?id=${genre}`)
        .then(results => results.json());
    },
    getLabelGenre: function (genre) {
        return fetch(`http://localhost:8088/label_genres?genreId=${genre}`)
        .then(results => results.json());
    }
}