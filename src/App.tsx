import "./App.css";

import PokemonCard from "./compenants/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function App() {
	return (
		<div>
			<PokemonCard pokeman={pokemonList[0]} />
			<PokemonCard pokeman={pokemonList[1]} />
		</div>
	);
}

export default App;
