import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <main className="flex bg-[#000] min-h-screen flex-col">
      <Hero />
      <Banner />
      <About />
      <Projects />
      <Certifications />
      <Process />
      <Tools />
      <Footer />
    </main>
  );
}
