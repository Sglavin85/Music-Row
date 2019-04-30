const artistContainer = document.querySelector("#artistContainer")

const newsContainer = document.querySelector("#newsContainer")

const newsPost = document.querySelector("#newsContainer")

let counter = 1
API.getArtists()
.then(elements => {
    elements.forEach(artist => {
            let name = artist.name
            let age = artist.age
            let genreId = artist.genresId
            API.getGenres(genreId)
                .then(response => {
                    let artistGenre = response[0].name
                    let domPush = makeArtistHTML(name, age, artistGenre, counter, genreId)
                    pushArtistToDOM(domPush)
                    counter++
                })
                .then(response => {
                    createArtistButtonListener()
                })
            })
    })
