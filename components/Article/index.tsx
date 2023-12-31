import Image from "next/image";
import { formatRichText } from "@/libs/utils";
import { type Article } from "@/libs/microcms";
import styles from "./index.module.css";
import PublishDate from "../Date";
import Category from "../Category";

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>

      <div className={styles.container}>
        <div className={styles.meta}>
          <Category category={data.category} />
          <PublishDate date={data.publishedAt || data.createdAt} />
        </div>
        {data.thumbnail && (
          <Image
            src={data.thumbnail?.url}
            alt=""
            className={styles.thumbnail}
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
          />
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
      </div>
    </main>
  );
}
