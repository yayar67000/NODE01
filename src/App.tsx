import "./App.css";
import { useState } from "react";

import PokemonCard from "./compenants/PokemonCard";

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
		<>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			</div>
			<div>
				{pokemonIndex > 0 ? (
					<button
						type="button"
						onClick={() => setPokemanIndex(pokemonIndex - 1)}
					>
						Précédent
					</button>
				) : (
					"Il y a bien un suivant"
				)}

				{pokemonIndex < pokemonList.length - 1 ? (
					<button
						type="button"
						onClick={() => setPokemanIndex(pokemonIndex + 1)}
					>
						Suivant
					</button>
				) : (
					"Il y a bien un précédent"
				)}
			</div>
		</>
	);
}

export default App;
