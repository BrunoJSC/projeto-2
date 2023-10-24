import Image from "next/image";

export function Hero() {
  return (
    <section className="flex items-center">
      <div>
        <Image
          src="/person.png"
          alt="Logo"
          className="object-contain w-[542px] h-[518px]"
          width={542}
          height={518}
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-white">
          Matheus
          <br />
          <span className="text-[#00FFBD]">Damasceno</span>
        </h1>

        <p className="text-white w-[628px] text-[20px] font-medium">
          Minha busca constante por ajudar as pessoas me permite desvendar as
          sutilezas das necessidades humanas e traduzi-las em soluções de design
          que complementam e apoiam os objetivos de negócios de forma autêntica
          e impactante.
        </p>
      </div>
    </section>
  );
}
