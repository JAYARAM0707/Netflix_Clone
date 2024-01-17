//api key from TMDB

const api = "api_key=4b3a1a26dd30feaf872995bea5299b9d";

//base url of the site 
const base_url ="https://api.themoviedb.org/3";

const banner_url ="https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"; //you can change "w185" to your prefrence

//requests for movies data
const requests={
     fetchTrending : `${base-url}/trending/all/week?${api}&language=en-US`,
     fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
     fetchActionMovies: `${base_url}/dicover/movies?${api}&with_genre=28`,
     fetchComedyMovies: `${base_url}/dicover/movies?${api}&with_genre=35`,
     fetchHorrorMovies: `${base_url}/dicover/movies?${api}&with_genre=27`,
     fetchRomanceMovies: `${base_url}/dicover/movies?${api}&with_genre=10749`,
     fetchDocumentaries: `${base_url}/dicover/movies?${api}&with_genre=99`,
};
//used to truncate the string 
function truncate(str, n){
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
}

//banner
fetch(request.fetchNetflixOriginals)
   .then((res)=> res.json())



   .then((data) => {
    console.log(data.results);
    //every refresh the movie will be change 

    const setMovie =
    data.results[Math.floor(Math.random() * data.results.length -1)];


    var banner =document.getElementById("banner");
    var banner_title = docment.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage =
    "url (" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name; 
   }