function makeArtistHTML (name, age, genre, id) {
    return `<div class="artists">
        <h1>${name}</h1>
        <h2>Age: ${age}</h2>
        <h2>Genre: ${genre}</h2>
        <button class="artistBtn" id="artist${id}">SIGN ARTIST</button>
    </div>`
}

function pushArtistToDOM(toBeAdded) {
    artistContainer.innerHTML += toBeAdded
}

function createArtistButtonListener () {
    let buttons = document.querySelectorAll(".artistBtn")
    buttons.forEach(button => {
        let idNumber = button.id.slice(6)
        button.addEventListener("click", () => {
            console.log(`you clicked artist #${idNumber}`)
            API.getlabels_genres(genreId)
                .then(reply => {
                    let labelId = reply.labelId
                    API.getLabels(labelId)
                    .then(labels => {
                        let label = labels.name
                        console.log(label)
                    })
                })
        })
    })
}



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
                    let domPush = makeArtistHTML(name, age, artistGenre, counter)
                    pushArtistToDOM(domPush)
                    counter++
                })
                .then(response => {
                    createArtistButtonListener()
                })
            })
    })