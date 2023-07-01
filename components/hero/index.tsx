import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      <Image className={styles.topImage} src="/top-bg.jpg" alt="" width={4438} height={6657} />
      <div className={styles.topText}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
    </section>
  );
}
