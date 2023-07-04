import Image from "next/image";
import { getNewsList } from "@/libs/microcms";
import { TOP_NEWS_LIMIT } from "@/constants";
import NewsList from "@/components/NewsList";
import ButtonLink from "@/components/ButtonLink";
import styles from "./page.module.css";
import cx from "classnames";

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
          <h1 className={styles.title}>microCMS</h1>
          <p>microCMSテンプレートのクローンです</p>
        </div>
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div>
            <h2 className={styles.sectionTitle}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              当社は、次世代テクノロジーの研究開発・製造・販売を行う革新的な企業です。
              <br />
              AI、ロボット工学、自律システムなど、幅広い分野でのソリューション提供を通じて、社会の進化と未来の創造に貢献します。
            </p>
            <ButtonLink href="/member">サービスページへ</ButtonLink>
          </div>
          <div>
            <Image
              className={styles.sectionImage}
              src="/business.png"
              alt=""
              width={1133}
              height={755}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={cx(styles.sectionInner, styles.aboutusInner)}>
          <div className={styles.aboutusImage}>
            <Image
              className={styles.sectionImage}
              src="/about-us.png?ver1.1"
              alt=""
              width={1133}
              height={755}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>About us</h2>
            <p className={styles.sectionTitleJa}>私たちについて</p>
            <p className={styles.sectionDescription}>
              「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
            </p>
            <dl className={styles.info}>
              <dd className={styles.infoTitle}>社名</dd>
              <dd className={styles.infoDescription}>株式会社Simple</dd>
            </dl>
            <dl className={styles.info}>
              <dd className={styles.infoTitle}>設立</dd>
              <dd className={styles.infoDescription}>2023年4月</dd>
            </dl>
            <dl className={styles.info}>
              <dd className={styles.infoTitle}>所在地</dd>
              <dd className={styles.infoDescription}>
                〒000-0000
                <br />
                東京都渋谷区渋谷1-1-1
              </dd>
            </dl>
            <dl className={styles.info}>
              <dd className={styles.infoTitle}>代表者</dd>
              <dd className={styles.infoDescription}>鈴木太郎</dd>
            </dl>
            <dl className={styles.info}>
              <dd className={styles.infoTitle}>資本金</dd>
              <dd className={styles.infoDescription}>1,000万円</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div>
            <Image
              className={styles.sectionImage}
              src="/hiring.png"
              alt=""
              width={1034}
              height={812}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="/recruit">採用情報へ</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
