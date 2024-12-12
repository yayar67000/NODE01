interface PokemonProps {
	pokemon: {
		name: string;
		imgSrc: string;
	};
}

function PokemonCard({ pokemon }: PokemonProps) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>
				<p>{pokemon.name}</p>
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
