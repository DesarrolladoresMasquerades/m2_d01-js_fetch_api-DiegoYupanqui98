/*console.log("JS Loaded");

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
}*/

console.log("JS Loaded");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then(buildPokedex)
    .catch(console.log);



function buildPokedex(pokeDex) {
    const pokeNames = pokeDex.results.map(pokemon => pokemon.name)
    const pokeLinks = pokeDex.results.map(pokemon=>pokemon.url)
    //const pokePics = []

     const fetchPicsPromises = pokeLinks.map(link=>fetch(link))
     Promise.all(fetchPicsPromises)
        .then((response) => addToDom(pokeNames, pokeLinks,response))
        



    pokeDex.results.forEach((pokemon) => {
        const newH1 = document.createElement("h1");
        newH1.innerText = pokemon.name;

        const newLink = document.createElement("a");
        newLink.innerText = "Link to Pokémon";
        newLink.href = pokemon.url;

        const newImg = document.createElement("img");
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((onePokemon) => {
                newImg.src = onePokemon.sprites.front_shiny;
                document.body.appendChild(newH1);
                document.body.appendChild(newImg);
                document.body.appendChild(newLink);
            });

    });
}

function addToDom(names, links, pokemons){

    for(let i = 0; i < pokemons.lenght; i++){
    const newH1 = document.createElement("h1");
    newH1.innerText = names[i];
    const newLink = document.createElement("a");
    newLink.innerText = "Link to Pokémon";
    newLink.href = links[i];
    const newImg = document.createElement("img");
    newImg.src = pokemons[i].sprites.front_shiny;
    document.body.appendChild(newH1);
    document.body.appendChild(newImg);
    document.body.appendChild(newLink);
}
}