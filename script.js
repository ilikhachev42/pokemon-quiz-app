//Type, Region, Color, Ability, Number of Evolution(How many evolutions pokemon has), Order of Evolution(Order in evolution chain)
//Rename the app into Pokeguesser
const pokemonNameInput = document.querySelector('#pokemon-name-input');
const btn = document.querySelector('.btn');
const pokemonBox = document.querySelector('svg');

const getPokemonData = async function(event, pokemon) {
	event.preventDefault();

	pokemon = pokemonNameInput.value.toLowerCase();
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	const info = await response.json();
	setPokemon(info.sprites.front_default);
}

btn.addEventListener('click', getPokemonData);

const setPokemon = function(pokemon) {
	let pokemonPicture = document.createElement('img');
	pokemonPicture.setAttribute('src', pokemon);
	pokemonBox.replaceWith(pokemonPicture);
}

const setData = function(...args) {
	console.log(args);
}
