interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

// Détecter lorsque le pokeman devient "pikachu"
// Lorsqu'il s'ouvre, ouvrir une alerte avec le message "pika pikachu !!!"

export default function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
	// const handleClick = () => {
	// 	pikachu ? alert("pika pikachu !!!") : alert("");
	// };

	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => {
						if (pokemon.name === "pikachu") {
							alert(
								"pika pikachu !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
							);
						}
						setPokemonIndex(index);
					}}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}
