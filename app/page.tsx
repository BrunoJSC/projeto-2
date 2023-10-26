import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex bg-[#000] min-h-screen flex-col ">
      <Hero />
      <Banner />
      <About />
      <Projects />
    </main>
  );
}
