//Use type, region, generation, color, evo_chain. If result > 1 use starting skill. 

const pokemonNameInput = document.querySelector('#pokemon-name-input');
const btn = document.querySelector('.btn');
let pokemon;

const getValue = function(event) {
	event.preventDefault();
	pokemon = pokemonNameInput.value.toLowerCase();
	console.log(pokemon);
}

btn.addEventListener('click', getValue);

let img = document.querySelector('.pok-pic');

async function getPokemon() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
	const pokemonData = await response.json();
		img.src = pokemonData.sprites.front_default;
}

getPokemon();
