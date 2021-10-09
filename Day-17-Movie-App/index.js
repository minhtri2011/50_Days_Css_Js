const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6eaa16b0df1b55a0ce7e5eb955aa7e44&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w500`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=6eaa16b0df1b55a0ce7e5eb955aa7e44&query=`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById('main');
getApi(API);

async function getApi(url) {
    const res = await fetch(url);
    const data = await res.json();
    renderMovie(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getApi(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})

function voteClass(v) {
    return v > 7 ? 'green' : 'red';
}
function renderMovie(movie) {
    main.innerHTML = ``;
    movie.forEach(mov => {
        const { backdrop_path, original_title, overview, vote_average } = mov;
        const movieComponent = document.createElement('div');
        movieComponent.classList.add('movie')
        movieComponent.innerHTML = `
        <div class="aspect-ratio"></div>
        <img
          src="${IMG_PATH + backdrop_path} " alt=""
        />
        <div class="movie-detail">
          <div class="movie-name">${original_title}</div>
          <div class="movie-rating ${voteClass(vote_average)}">${vote_average}</div>
        </div>
        <div class="movie-overview">
        ${overview}
        </div>
`;
        main.appendChild(movieComponent)
    })
}