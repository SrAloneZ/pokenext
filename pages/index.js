import PageLoader from 'next/dist/client/page-loader';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Card from '../components/Card';

export async function getStaticProps()
{
	const maxPokemons = 10;
	const api = 'https://pokeapi.co/api/v2/pokemon/';

	const res = await fetch(`${api}/?limit=${maxPokemons}`);
	const data = await res.json();

	// add pokemon index
	data.results.forEach((item, index) => {
		item.id = index + 1;
	  });

	  return {
		props: {
		  pokemons: data.results,
		},
	  };
}

export default function Home(props) {
	return (
		<>
			<div className={styles.title_container}>
				<h1 className={styles.title}>Poke<span>Next</span></h1>
				<Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext"/>
			</div>
			<div className={styles.pokemon_container}>
			{
				props.pokemons.map((pokemon) => (
					// Componente de cartão, responsável por exibir um resumo dos pokemons
					<Card key={pokemon.id} pokemon={pokemon} />
				))
			}
			</div>
		</>
	)
}
