import Image from "next/image";

const iconPaths = ["/figma.svg", "/xd.svg", "/notion.svg", "/trello.svg"];

export function Tools() {
  return (
    <section>
      <hr className="border-gray-600 mx-auto max-w-[90%] my-10 md:my-20" />
      <h1 className="text-3xl md:text-5xl text-center font-extrabold text-white my-5">
        Ferramentas
      </h1>

      <p className="max-w-3xl md:max-w-2xl text-base md:text-lg lg:text-xl font-normal text-center leading-relaxed text-white mx-auto px-4 md:px-0">
        Explorando um universo em constante expansão de conhecimento criativo,
        abraço de mente aberta novas metodologias, abordagens e estratégias,
        capacitando meu ofício com uma paleta diversificada de ferramentas
        preferidas para alcançar a excelência.
      </p>

      <div className="w-full md:w-[456px] flex flex-wrap justify-center mx-auto mt-10">
        {iconPaths.map((path, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-2 my-2"
          >
            <Image src={path} alt="" width={80} height={80} />
          </div>
        ))}
      </div>

      <hr className="border-gray-600 mx-auto max-w-[90%] my-10 md:my-20" />
    </section>
  );
}
