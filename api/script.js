const getMovies =async () =>{

const url = "https://swapi.co/api/films/";

const response = await fetch(url);
const results = await response.json();
const movies = results.results.map(res =>{
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const movieName = document.createElement("span");
    movieName.innerText = res.title
  
    const movieDet = document.createElement("a");
    movieDet.setAttribute("href", `movieDetails.html?id=${res.episode_id}`);
    movieDet.innerText = "See details"
    td1.appendChild(movieName)
    td2.appendChild(movieDet)
    tr.appendChild(td1)
    tr.appendChild(td2);
    tbody.appendChild(tr);





})







}

getMovies();