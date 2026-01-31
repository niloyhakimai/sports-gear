import { Navbar } from "@/components/Navbar";
import { SportsHero } from "@/components/SportsHero";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] min-h-screen">
      <Navbar />
      <SportsHero />
    </main>
  );
}