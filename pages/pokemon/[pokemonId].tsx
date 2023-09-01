import styles from "@/styles/pages/pokemonId.module.css";
import Image from "next/image";
import Link from "next/link";

import * as Icon from "react-bootstrap-icons";

export const getStaticPaths = async () => {
    const maxPokemons = 100;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonId;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    let num = 0;
    data.id > 100 ? (num = 4) : (num = 3);
    data.id = String(data.id).padStart(num, "0");

    return {
        props: {
            pokemon: data,
        },
    };
};

export default function PokemonId({ pokemon }: any) {
    return (
        <div className={styles.body}>
            <h1>
                <p>
                    <span>Poké</span>Next
                </p>
                <Image src="/pokeball.png" height={30} width={30} alt="" />
            </h1>
            <p className={styles.pokedex_title}>PokéDex</p>
            <div className={styles.pokedex}>
                <p className={styles.pokedex_title}>{pokemon.name}</p>
                <div className={styles.pokedex_container}>
                    <div className={styles.pokedex_pokemon_pic}>
                        <Image
                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                            height={300}
                            width={300}
                            alt=""
                        />
                        <p className={styles.pokemon_id}>#{pokemon.id}</p>
                    </div>
                    <div className={styles.pokedex_pokemon_info}>
                        <p className={styles.pokedex_subtitle}>Tipo:</p>
                        <div className={styles.pokemon_status_container}>
                            {pokemon.types.map((item: any) => (
                                <p
                                    key={item.slot}
                                    className={`${styles.pokemon_type} ${styles[''+ item.type.name]}`}
                                >
                                    {item.type.name}
                                </p>
                            ))}
                        </div>
                        <p className={styles.pokedex_subtitle}>Altura:</p>
                        <div className={styles.pokemon_status_container}>
                            <p key={pokemon.id} className={styles.pokemon_type}>
                                {pokemon.height / 10} m
                            </p>
                        </div>
                        <p className={styles.pokedex_subtitle}>Peso:</p>
                        <div className={styles.pokemon_status_container}>
                            <p key={pokemon.id} className={styles.pokemon_type}>
                                {pokemon.weight / 10} Kg
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons_container}>
                    <Link href={`/pokemon/${parseInt(pokemon.id)-1}`}>
                        <Icon.ChevronLeft size={15} />
                    </Link>
                    <Link href={`/pokemon/${parseInt(pokemon.id)+1}`}>
                        <Icon.ChevronRight size={15} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

// {
//     "types" : [
//         {
//             "slot":1,
//             "type":{
//                 "name":"grass",
//                 "url":"https://pokeapi.co/api/v2/type/12/"
//             }
//         },
//         {
//             "slot":2,
//             "type":{
//                 "name":"poison",
//                 "url":"https://pokeapi.co/api/v2/type/4/"
//             }
//         }
//     ];
// }
