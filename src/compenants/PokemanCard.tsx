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

function PokemanCard() {
	const pokeman = pokemonList[1];

	// Créer un ternaire pour afficher l'image seulement si pokeman.imgScr est défini.
	//Si c'est le cas, ulitiser une balise <img> pour l'afficher sinon un paragraphe <p> avec "???" en texte
	return (
		<figure>
			{pokeman.imgSrc ? (
				<img src={pokeman.imgSrc} alt={pokeman.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>
				<p>{pokeman.name}</p>
			</figcaption>
		</figure>
	);
}

export default PokemanCard;
