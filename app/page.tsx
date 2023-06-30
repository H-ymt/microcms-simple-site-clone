import Image from "next/image";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <>
      <section className={styles.top}>
        <Image className={styles.topImage} src="/top-bg.jpg" alt="" width={4438} height={6657} />

        <div className={styles.topText}>
          <h1 className={styles.title}>microCMS&ensp;</h1>
          <p>microCMSテンプレートのクローンです</p>
        </div>
      </section>
    </>
  );
}
