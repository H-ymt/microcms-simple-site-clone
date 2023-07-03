import Hero from "@/components/hero";

export const metadata = {
  title: "News | Corporate Site",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      {children}
    </>
  );
}
