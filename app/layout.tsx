import Footer from "@/components/Footer";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/Header";

export const metadata = {
  title: "コーポレートサイト",
  description: "microCMSが提供するコーポレートサイトテンプレートのクローンです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
