import Sheet from "@/components/Sheet";
import Hero from "@/components/hero";

export const metadata = {
  title: "Contact | Corporate Site",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="コンタクト" />
      <Sheet>{children}</Sheet>
    </>
  );
}
