function loadMovies() {
    fetch('movies.json')
        .then(r => r.json())
        .then(displayMovies);
}
function displayMovies(movies) {
    displayMovie(movies[0]);
}
function displayMovie(movie) {
    let title = document.createElement("h1");
    let protagonist = document.createElement("div");
    title.innerText = movie.title;
    protagonist.innerText = movie.protagonist.actorName + " " + movie.protagonist.characterName;
    let box = document.createElement("div");
    box.append(title,protagonist);
    document.getElementById("movies").append(box);
}
window.addEventListener('load', loadMovies);