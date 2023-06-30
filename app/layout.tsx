import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "コーポレートサイト",
  description: "microCMSが提供するコーポレートサイトテンプレートのクローンです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
