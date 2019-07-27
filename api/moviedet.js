

const getMovieDetail = async () =>{
const id = window.location.search;
const idno = id.split('=')
const url = "https://swapi.co/api/films/";
const res = await fetch(url);
const result = await res.json();

result.results.map(item =>{


if(item.episode_id === parseInt(idno[1])){

    const title = document.createElement("li");
    const crawl = document.createElement("li");
    const director = document.createElement("li");
    const producer = document.createElement("li");
    const release = document.createElement("li");
    title.innerText = item.title;
    crawl.innerText = item.opening_crawl;
    director.innerText = item.director;
    producer.innerText = item.producer;
    release.innerText = item.release_date;
    const ul = document.getElementById("ul")
    ul.appendChild(title)
    ul.appendChild(crawl)
    ul.appendChild(director)
    ul.appendChild(producer)
    ul.appendChild(release)


}

})












}

getMovieDetail();