import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center ">
      <div className=" w-full md:w-1/2">
        <Image
          src="/person.png"
          alt="Logo"
          className="object-contain w-full h-full"
          width={542}
          height={518}
        />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Matheus
          <br />
          <span className="text-[#00FFBD]">Damasceno</span>
        </h1>

        <div className="bg-[#00FFBD] mb-4 h-1 w-24 md:w-32" />

        <p className="text-white text-base md:text-lg font-medium mb-4">
          Minha busca constante por ajudar as pessoas me permite desvendar as
          sutilezas das necessidades humanas e traduzi-las em soluções de design
          que complementam e apoiam os objetivos de negócios de forma autêntica
          e impactante.
        </p>

        <Link
          href="/sobre"
          className="py-3 px-6 md:py-4 md:px-8 border border-[#00FFBD] text-[#00FFBD] inline-block"
        >
          Saiba mais
        </Link>
      </div>
    </section>
  );
}
