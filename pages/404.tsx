import styles from "@/styles/pages/NotFound.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles.body}>
            <h1>Página não encontrada!</h1>
            <Image
                src="/pikachu.png"
                width={300}
                height={300}
                alt="Pikachu com um boné"
            />
            <p>
                Você encontrou uma <span>página</span> que ainda não foi
                catalogada na PokéDex!
            </p>
            <p>
                Nossos desenvolvedores já estão trabalhando para resolver este
                problema! <br /> enquanto isso clique <Link href="/">aqui</Link> para
                voltar à página anterior
            </p>
        </div>
    );
}
