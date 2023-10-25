import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex bg-[#000] min-h-screen flex-col items-center">
      <Hero />
      <Banner />
    </main>
  );
}
