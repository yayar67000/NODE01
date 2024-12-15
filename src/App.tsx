import "./App.css";
import { useState } from "react";

import PokemonCard from "./compenants/PokemonCard";
// import { renderToString } from "react-dom/server";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
		imgSrc: "",
	},
];

function App() {
	const [pokemonIndex, setPokemanIndex] = useState(0);

	return (
		<div>
			<nav>
				{pokemonList.map((pokemons, index) => (
					<button
						type="button"
						key={pokemons.name}
						onClick={() => setPokemanIndex(index)}
					>
						{pokemons.name}
					</button>
				))}
			</nav>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}

export default App;
