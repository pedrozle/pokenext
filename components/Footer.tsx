import Link from "next/link";

import styles from '@/styles/components/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>PokéNext &copy; 2023</p>
        </footer>
    );
}
