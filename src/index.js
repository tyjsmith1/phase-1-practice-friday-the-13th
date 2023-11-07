// Tyler's code

const movieListContainer = document.getElementById("movie-list")
const watchButton = document.getElementById("watched")


const url = "http://localhost:3000/movies"
let movies = ""

fetch(url)
    .then(Response => Response.json())
    .then(data => {
        // console.log(data)
        movies = data // This a key cog is using it on line 24
        for (movieData of data) {
            // console.log(imgLink.image)
            renderImg(movieData.image)
        }
        renderSelectedMovie(data[0])


    })

movieListContainer.addEventListener("click", (e) => {
    // debugger
    console.log(movies)
    console.log(e.target.src) // Image value
    const results = movies.find(({ image }) => e.target.src.includes(image.substring(1)))
    renderSelectedMovie(results)
})

watchButton.addEventListener("click", (e) => {
    //WHen this is clicked we should be making a post request to
    // the server to change the watched value

    let stateOfWatch = e.target
    console.log(stateOfWatch)

    // if (stateOfWatch == "Unwatched") {
    //     fetch(url, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    // } else {
    //     fetch(url, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    // }


})


function renderImg(el) {
    const img = document.createElement("img")
    img.src = el
    movieListContainer.appendChild(img)
}

function renderSelectedMovie(el) {
    const movieImgContainer = document.getElementById("detail-image")
    const movieTitleContainer = document.getElementById("title")
    const movieYearContainer = document.getElementById("year-released")
    const movieDescContainer = document.getElementById("description")
    movieImgContainer.src = el.image
    movieTitleContainer.textContent = el.title
    movieYearContainer.textContent = el.release_year
    movieDescContainer.textContent = el.description

    if (el.watched) {
        watchButton.innerHTML = "Watched"
    } else {
        watchButton.innerHTML = "Unwatched"
    }

}

