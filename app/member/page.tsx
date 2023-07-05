import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "@/components/ButtonLink";

export default function Page() {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image className={styles.image} src="/member.png" alt="" width={384} height={349} />
          <dl>
            <dt className={styles.name}>デイビッド・チャン</dt>
            <dd className={styles.position}>CEO</dd>
            <dd className={styles.description}>
              グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。
            </dd>
          </dl>
        </li>

        <li className={styles.item}>
          <Image className={styles.image} src="/member.png" alt="" width={384} height={349} />
          <dl>
            <dt className={styles.name}>エミリー・サンダース</dt>
            <dd className={styles.position}>COO</dd>
            <dd className={styles.description}>
              グローバル企業での運営管理と組織改革の経験豊富なエグゼクティブ。以前は製造業界でCOOとして勤務し、生産効率の向上や品質管理の最適化に成功。戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。
            </dd>
          </dl>
        </li>

        <li className={styles.item}>
          <Image className={styles.image} src="/member.png" alt="" width={384} height={349} />
          <dl>
            <dt className={styles.name}>ジョン・ウィルソン</dt>
            <dd className={styles.position}>CTO</dd>
            <dd className={styles.description}>
              先進技術の研究開発と製品イノベーションの分野で優れた経歴を持つテクノロジーエキスパート。以前は、大手テクノロジー企業の研究開発部門で主任エンジニアとして勤務し、革新的な製品の開発に携わった。最新の技術トレンドに精通し、当社の製品ポートフォリオを革新的かつ競争力のあるものにするためにリサーチと開発をリードしている。
            </dd>
          </dl>
        </li>
      </ul>

      <div className={styles.footer}>
        <h2>We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>

        <div className={styles.button}>
          <ButtonLink href="/recruit">採用情報へ</ButtonLink>
        </div>
      </div>
    </div>
  );
}
