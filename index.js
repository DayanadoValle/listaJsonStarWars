import data from './src/data/movies/movies.json' assert {type: "json"};

const filmes = data
console.log(filmes)
const movies =document.getElementById("card")


   

filmes.forEach(elemento => {
    card.innerHTML += `
        
        <div class="card_js">
           
            <img src=${elemento.Poster}>
            <br>
            <h3>${elemento.Title}</h3>
            <p><b>Ano:</b> ${elemento.Year}</p>
            <p><b>Elenco:</b> ${elemento.Actors}</p>
            <p><b>Resumo:</b> ${elemento.Plot}</p>
            <p><b>Duração:</b> ${elemento.Runtime}</p>
            <p><b>Diretor:</b> ${elemento.Director}</p>
            <p><b>Gênero:</b> ${elemento.Genre}</p>
        </div>  
    `
      
})