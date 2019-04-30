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
        return fetch(`http://localhost:8088/label_genres?genresId=${genre}`)
        .then(results => results.json());
    },
    postArtistLabel: function (artistId, obj) {
        return fetch(`http://localhost:8088/artists/${artistId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(results => results.json())
    }
}