import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="" width={40} height={40} priority />
      </Link>
      <Menu />
    </header>
  );
}
