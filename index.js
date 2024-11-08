const apiKey = (process.env.APIKEY);
const moviesContainer = document.getElementById('moviesContainer');
const actorsContainer = document.getElementById('actorsContainer');
const placeholderImage = 'https://placehold.co/300x450?text=no+image+found';

async function searchMovies() {
    const query = document.getElementById('movieInput').value;
    if (!query) return;

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    actorsContainer.innerHTML = '';
    pop.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeholderImage;

        movieDiv.innerHTML = `
          <img src="${posterPath}" alt="${movie.title}">
          <p>${movie.title}</p>
        `;
        movieDiv.onclick = () => getActors(movie.id);
        moviesContainer.appendChild(movieDiv);
    });
}

async function getActors(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    const data = await response.json();
    displayActors(data.cast);
    moviesContainer.innerHTML = '';
}

function displayActors(actors) {
    actorsContainer.innerHTML = '';
    actors.forEach(actor => {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor');

        const profilePath = actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : placeholderImage;

        actorDiv.innerHTML = `
          <img src="${profilePath}" alt="${actor.name}">
          <p class="actor-name">${actor.name}</p>
          <p class="character-name">as ${actor.character}</p>
        `;
        actorsContainer.appendChild(actorDiv);
    });
}
