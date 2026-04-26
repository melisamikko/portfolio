import { BlogTeaser } from "@/components/BlogTeaser";
import { FavoriteLessons } from "@/components/FavoriteLessons";
import { Toolbox } from "@/components/toolbox/Toolbox";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroIntro } from "@/components/HeroIntro";
import { ValuesContact } from "@/components/ValuesContact";
import { ZeroToOne } from "@/components/ZeroToOne";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <HeroIntro />
        <ZeroToOne />
        <FavoriteLessons />
        <BlogTeaser />
        <ValuesContact />
        <Toolbox />
      </main>
      <Footer />
    </div>
  );
}
