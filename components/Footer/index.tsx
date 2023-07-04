import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/news">News</Link>
          </li>
          <li className={styles.item}>
            <Link href="/member">Member</Link>
          </li>
          <li className={styles.item}>
            <Link href="/recruit">Recruit</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>© SIMPLE. All Rights Reserved 2023</p>
    </footer>
  );
}
