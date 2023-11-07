// Tyler's code

const movieListContainer = document.getElementById("movie-list")
const url = "http://localhost:3000/movies"
let movies = ""

fetch(url)
.then(Response => Response.json())
.then(data => {
    console.log(data)
    for (imgLink of data) {
        console.log(imgLink.image)
        renderImg(imgLink.image)
    }
    
    renderSelectedMovie(data[0])

    // Title, Yr. desc

    
})

movieListContainer.addEventListener("click", (e) => {
    // debugger
    console.log(e.target)
})


function renderImg (el) {
    const img = document.createElement("img")
    img.src = el
    movieListContainer.appendChild(img)
}

function renderSelectedMovie (el) {
    const movieImgContainer = document.getElementById("detail-image")
    const movieTitleContainer = document.getElementById("title")
    const movieYearContainer = document.getElementById("year-released")
    const movieDescContainer = document.getElementById("description")
    movieImgContainer.src = el.image
    movieTitleContainer.textContent = el.title
    movieYearContainer.textContent = el.release_year
    movieDescContainer.textContent = el.description

}

