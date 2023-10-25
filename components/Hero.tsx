import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full">
      <div className="flex items-center  flex-col md:flex-row">
        <div className="w-full md:w-[920] bg-[url('/person.png')] bg-cover bg-no-repeat h-[542px]">
          {/* <Image
          src="/person.png"
          alt="Logo"
          className="object-contain w-full h-full"
          width={542}
          height={518}
        /> */}
        </div>

        <div className="w-full md:w-[calc(100% - 920px)] p-8 ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Matheus
            <br />
            <span className="text-[#00FFBD]">Damasceno</span>
          </h1>

          <div className="bg-[#00FFBD] mb-4 h-1 w-24 md:w-32" />

          <p className="w-full md:w-[628px]  text-white text-base md:text-lg font-medium mb-4 leading-relaxed">
            Minha busca constante por ajudar as pessoas me permite desvendar as
            sutilezas das necessidades humanas e traduzi-las em soluções de
            design que complementam e apoiam os objetivos de negócios de forma
            autêntica e impactante.
          </p>

          <Link
            href="/sobre"
            className="py-3 px-6 md:py-4 md:px-8 border border-[#00FFBD] text-[#00FFBD] inline-block"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}
