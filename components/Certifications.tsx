import Image from "next/image";

const images = [
  {
    src: "/ibm-logo.svg",
    alt: "",
    width: 500,
    height: 1000,
  },
  {
    src: "/ux-logo.svg",
    alt: "",
    width: 500,
    height: 1000,
  },
  {
    src: "/unicorn-logo.svg",
    alt: "",
    width: 500,
    height: 1000,
  },
  {
    src: "/fiap-logo.svg",
    alt: "",
    width: 500,
    height: 1000,
  },
];

export function Certifications() {
  return (
    <section className="w-full bg-[#101010]">
      <h1 className="text-[58px] text-center font-extrabold text-white my-5">
        Certificados de Empresas
      </h1>
      <p className="max-w-3xl md:max-w-[1328px] text-lg md:text-[20px] font-normal text-center leading-relaxed text-white mx-auto px-4 md:px-0 text-[20px]">
        Por meio de uma trajetória dedicada e incansável busca por excelência na
        área de UX design, a qual foi conquistada através de enriquecedoras
        experiências de aprendizado e imersões em diversas empresas renomadas do
        setor, onde pude aprimorar minhas habilidades, absorver as melhores
        práticas e mergulhar profundamente nas mais avançadas metodologias.
      </p>

      <div className="max-w-[1167px] mx-auto flex flex-wrap items-center justify-around mt-5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-[176px] h-[88px] object-contain"
          />
        ))}
      </div>
    </section>
  );
}
