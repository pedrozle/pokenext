import Image from "next/image";

import styles from "@/styles/components/Card.module.css";
import Link from "next/link";

export default function Card({ pokemon }: any) {
    return (
        <div className={styles.card}>
            <Image
                key={pokemon.id}
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                height={100}
                width={100}
                alt={`pokemons ${pokemon.name}`}
            />
            <p key={pokemon.id} className={styles.card_id}>
                <span key={pokemon.id}>#{pokemon.id}</span>
            </p>
            <p className={styles.card_title} key={pokemon.id}>
                {pokemon.name}
            </p>
            <Link key={pokemon.id} className={styles.card_button} href={`/pokemon/${parseInt(pokemon.id)}`}>
                Detalhes
            </Link>
        </div>
    );
}
