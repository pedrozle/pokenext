import Link from "next/link";

import styles from "@/styles/components/Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <span>
                <Link href="/">
                    <Image
                        src="/pokeball.png"
                        width={20}
                        height={20}
                        alt="PokeNext Logo"
                    />
                    <p>PokeNext</p>
                </Link>
            </span>
            <ul>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}
