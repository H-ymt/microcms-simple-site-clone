import Image from "next/image";
import { getNewsList } from "@/libs/microcms";
import { TOP_NEWS_LIMIT } from "@/constants";
import NewsList from "@/components/NewsList";
import styles from "./page.module.css";

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <Image className={styles.topImage} src="/top-bg.jpg" alt="" width={4438} height={6657} />

        <div className={styles.topText}>
          <h1 className={styles.title}>microCMS&ensp;</h1>
          <p>microCMSテンプレートのクローンです</p>
        </div>
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
      </section>
    </>
  );
}
