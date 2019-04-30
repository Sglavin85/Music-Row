function makeArtistHTML (name, age, genre, id, genreId) {
    return `<div class="artists" id="container${id}">
        <h1>${name}</h1>
        <h2>Age: ${age}</h2>
        <h3 id="genre${genreId}">Genre: ${genre}</h3>
        <button class="artistBtn" id="artist${id}">SIGN ARTIST</button>
    </div>`
}

function pushArtistToDOM(toBeAdded) {
    artistContainer.innerHTML += toBeAdded
}

function makeLabelAnnouncement(label, name) {
    return `<div class="news">
            <h1>BREAKING NEWS</h1>
            <h2>${label} has signed ${name}!!</h2>
            <button class="newsBtn">GO BACK</button>
            </div>`
}

function pushNewsToDOM(toBeAdded) {
    newsContainer.innerHTML = toBeAdded
}

function createNewsListener() {
    let newsBtn = document.querySelector(".newsBtn")
    newsBtn.addEventListener("click", () => {
        newsPost.style.display = "none";
    })
}

function createPostObj (labelId) {
    return {
        labelsId: labelId
    };
}



function createArtistButtonListener () {
    let buttons = document.querySelectorAll(".artistBtn")
    buttons.forEach(button => {
        let idNumber = button.id.slice(6)
        let artistGenreId = document.querySelector(`#container${idNumber} > h3`).id.slice(5)
        button.addEventListener("click", () => {
            console.log(`you clicked artist #${idNumber}`)
            API.getLabelGenre(artistGenreId)
                .then(reply => {
                    let labelId = reply[0].labelsId
                    API.getLabels(labelId)
                    .then(labels => {
                        let label = labels[0].name
                        let name = document.querySelector(`#container${idNumber} > h1`).textContent
                        let news = makeLabelAnnouncement(label, name)
                        pushNewsToDOM(news)
                        newsPost.style.display = "flex"
                        createNewsListener()
                        let postOBJ = createPostObj(labelId)
                        API.postArtistLabel(idNumber, postOBJ)

                    })
                })
            })
    })
}



