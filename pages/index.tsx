import Card from "@/components/Card";
import styles from "@/styles/pages/Home.module.css";
import Image from "next/image";

export async function getStaticProps() {
    const maxPokemons = 100;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    //adiciona index nos pokemons
    data.results.forEach((item: any, index: number) => {
        item.id = index + 1;
        let num = 0;
        item.id > 100 ? (num = 4) : (num = 3);
        item.id = String(item.id).padStart(num, "0");
    });

    return {
        props: {
            pokemons: data.results,
        },
    };
}

export default function Home({ pokemons }: any) {
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
                <div className={styles.card_container}>
                    {pokemons.map((pokemon: any) => (
                        <Card key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </div>
        </div>
    );
}
