console.log("JS Loaded");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then(buildPokedex)
    .catch(console.log);


function buildPokedex(pokeDex) {
    pokeDex.results.forEach((pokemon) => {
        const newH1 = document.createElement("h1");
        newH1.innerText = pokemon.name;

        const newLink = document.createElement("a");
        newLink.innerText = `Go to ${pokemon.name} properties`;
        newLink.href = pokemon.url;

        const newImg = document.createElement("img");


        fetch(pokemon.url)
            .then(response => response.json())
            .then(result => {
                newImg.src = result.sprites.front_shiny
                document.body.appendChild(newH1);
                document.body.appendChild(newLink);
                document.body.appendChild(newImg);

            })



    }
    );
}