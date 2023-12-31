"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.list}>
          <Link className={styles.item} href="/news" onClick={close}>
            <li>News</li>
          </Link>
          <Link className={styles.item} href="/member" onClick={close}>
            <li>Member</li>
          </Link>
          <Link className={styles.item} href="/recruit" onClick={close}>
            <li>Recruit</li>
          </Link>
          <Link className={styles.item} href="/contact" onClick={close}>
            <li>Contact</li>
          </Link>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="メニューを閉じる" width={32} height={32} priority />
        </button>
      </nav>

      <button className={cx(styles.button, styles.open)} onClick={open}>
        <Image src="/hamburger.svg" alt="メニューを開く" width={32} height={32} priority />
      </button>
    </div>
  );
}
