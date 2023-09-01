import styles from "@/styles/pages/About.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className={styles.body}>
            <h1>Sobre o projeto</h1>
            <p>
                PokéNext é um projeto desenvolvido para o aprendizado da
                framework Next.js junto da biblioteca React
            </p>
            <div className={styles.logos}>
                <Image src="/pokemon.webp" width={300} height={100} alt="" />
                <span className={styles.e}>+</span>
                <Image src="/next.png" width={300} height={75} alt="" />
                <span className={styles.e}>+</span>
                <Image src="/react.png" width={300} height={90} alt="" />
            </div>
            <p className={styles.copy}>Criado com amor por <Link href="https://github.com/pedrozle">Pedrozle &copy;</Link></p>
        </div>
    );
}
