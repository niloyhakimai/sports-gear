import { Navbar } from "@/components/Navbar";
import { SportsHero } from "@/components/SportsHero";
import { Trending } from "@/components/Trending"; // New
import { Innovation } from "@/components/Innovation"; // New
import { SportsFooter } from "@/components/SportsFooter"; // New

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] dark:bg-[#0b0b0b] min-h-screen transition-colors duration-500">
      <Navbar />
      <SportsHero />
      <Trending />
      <Innovation />
      <SportsFooter />
    </main>
  );
}