interface PokemonProps {
	props: {
		name: string;
		imgSrc: string;
	};
}

function PokemonCard({ props }: PokemonProps) {
	return (
		<figure>
			{props.imgSrc ? <img src={props.imgSrc} alt={props.name} /> : <p>???</p>}
			<figcaption>
				<p>{props.name}</p>
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
