import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="md:relative w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="-z-[1px]">
          <Image
            src="/person2.png"
            alt=""
            width={542}
            height={518}
            className="object-contain w-[100%] h-auto md:w-[942px] md:h-[918px] -z-[1px]"
          />
        </div>

        <div className="md:absolute md:top-[35%] md:left-[50%] md:translate-x-[-2%] md:translate-y-[-50%] md:w-[628px]  w-full md:text-left text-center">
          <h1 className="text-white md:text-[64px] text-5xl  font-bold w-full ">
            Matheus
            <br />
            <p className="text-[#00FFBD]">Damasceno</p>
            <div className="border-4 border-[#00FFBD] w-[140px] inline-block" />
          </h1>

          <p className="text-white text-lg md:text-[20px] font-medium leading-relaxed w-full">
            Minha busca constante por ajudar as pessoas me permite desvendar as
            sutilezas das necessidades humanas e traduzi-las em soluções de
            design que complementam e apoiam os objetivos de negócios de forma
            autêntica e impactante.
          </p>

          <Link
            href="/sobre"
            className="text-white border-4 border-[#00FFBD] py-[16px] px-[56px] uppercase font-bold inline-block mt-5 hover:bg-[#00FFBD] hover:text-[#000]"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <p className="text-[#9E9E9E] text-lg md:text-[16px] font-medium leading-relaxed w-full text-center">
        Product Design / UX Research / UI Design / Design Thinking
      </p>
    </section>
  );
}
