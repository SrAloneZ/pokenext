import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css";

export default function Card(props)
{
	return (
		<div className={styles.card}>
			<Image src={`https://cdn.traction.one/pokedex/pokemon/${props.pokemon.id}.png`} width="120" height="120" alt={props.pokemon.name}/>
			<p className={styles.id}>#{props.pokemon.id}</p>
			<h3 className={styles.title}>{props.pokemon.name}</h3>
			<Link href={`/pokemon/${props.pokemon.id}`}>
				<a className={styles.btn}>Detalhes</a>
			</Link>
		</div>
	)
}