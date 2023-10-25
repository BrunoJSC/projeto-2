import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full flex flex-col justify-center min-h-screen relative ">
      <div className="w-full flex  justify-center  px-4">
        <div className="w-full hidden md:block h-[918px] md:w-[946px] md:bg-[url('/person.png')] bg-no-repeat -z-[1px]" />

        <div className="ml-0 md:-ml-56 md:max-w-[628px] h-[380px] md:mt-44">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Matheus
            <p className="text-[#00FFBD] ">Damasceno</p>
          </h1>

          <div className="w-[120px] border-4 border-[#00FFBD] my-4" />

          <p className="text-white md:w-full text-[20px] font-medium">
            Minha busca constante por ajudar as pessoas me permite desvendar as
            sutilezas das necessidades humanas e traduzi-las em soluções de
            design que complementam e apoiam os objetivos de negócios de forma
            autêntica e impactante.
          </p>

          <Link
            href="/sobre"
            className="text-white border-4 border-[#00FFBD] py-[16px] px-[56px] inline-block uppercase font-bold mt-5"
          >
            Saiba mais
          </Link>
        </div>
        <p className="text-white text-center z-10 absolute bottom-0 left-0 right-0 text-[#9E9E9E]">
          Product Design / UX Research / UI Design / Design Thinking
        </p>
      </div>
    </section>
  );
}
