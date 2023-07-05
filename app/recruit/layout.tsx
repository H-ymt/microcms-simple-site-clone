import Sheet from "@/components/Sheet";
import Hero from "@/components/hero";

export const metadata = {
  title: "Recruit | Corporate Site",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
