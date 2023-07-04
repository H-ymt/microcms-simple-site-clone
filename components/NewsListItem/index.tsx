import { Article } from "@/libs/microcms";
import styles from "./index.module.css";
import Category from "../Category";
import Link from "next/link";
import Image from "next/image";
import PublishDate from "../Date";

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/news/${news.id}`} className={styles.link}>
        {news.thumbnail ? (
          <Image
            src={news.thumbnail?.url}
            alt=""
            className={styles.thumbnail}
            width={news.thumbnail?.width}
            height={news.thumbnail?.height}
          />
        ) : (
          <Image src="" className={styles.image} alt="" width={1200} height={630} />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{news.title}</dt>
          <dd className={styles.meta}>
            <Category category={news.category} />
            <PublishDate date={news.publishedAt || news.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
