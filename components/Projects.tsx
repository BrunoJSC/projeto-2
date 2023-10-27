import Image from "next/image";

const projects = [
  {
    image: "/florest.png",
    title: "Cuidados com a saúde (All-in-One)",
    description:
      "Identificar as principais dificuldades que as pessoas têm para se manterem saudáveis no dia a dia e projetar uma solução unificada para ajudá-las (preparador físico, médico, nutricionista, etc).",
  },
  {
    image: "/design.png",
    title: "Design System",
    description:
      "Nesse Design System fizemos a espinha dorsal que garante consistência visual, eficiência no desenvolvimento e satisfação do usuário. Com uma abordagem coesa, elevamos a qualidade desse projeto e facilidade para implementação.",
  },
  {
    image: "/unicorn-bg.png",
    title: "Mini-Cases de UX",
    description:
      "Durante minha jornada no curso UX Unicórnio, mergulhei profundamente nas disciplinas essenciais de Experiência do Usuário (UX). Através de mini cases práticos, adquiri conhecimentos valiosos e habilidades fundamentais em cada uma delas.",
  },
];

export function Projects() {
  return (
    <section className="w-full my-5 p-2">
      <h1 className="text-4xl md:text-5xl text-center font-extrabold text-white my-5">
        Meus Projectos
      </h1>

      <div className="max-w-[1112px] mx-auto border border-[#00FFBD]">
        <div
          className="w-full md:h-[447px] bg-cover bg-no-repeat flex flex-col items-center justify-center relative"
          style={{ backgroundImage: "url('/florest.png')" }}
        >
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-32 md:w-44 inline-block my-2" />

          <h2 className="text-2xl md:text-5xl text-center font-extrabold text-white">
            Cuidados com a saúde (All-in-One)
          </h2>
          <p className="text-lg md:text-[20px] lg:text-[20px] font-medium text-center w-full md:w-[889.594px] lg:w-[80%] text-white mt-5">
            Identificar as principais dificuldades que as pessoas têm para se
            manterem saudáveis no dia a dia e projetar uma solução unificada
            para ajudá-las (preparador físico, médico, nutricionista, etc).
          </p>

          <div className="md:absolute bottom-5 left-5 mb-10 md:mb-0 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="md:absolute md:-translate-x-1/2 bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>

        <div
          className="w-full h-[447px] bg-red-500 bg-cover bg-no-repeat flex flex-col items-center justify-center relative"
          style={{ backgroundImage: "url('/design.png')" }}
        >
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-32 md:w-44 inline-block my-2" />

          <h2 className="text-2xl md:text-5xl text-center font-extrabold text-white">
            Design System
          </h2>
          <p className="text-lg md:text-[20px] lg:text-[20px] font-medium text-center w-full md:w-[889.594px] lg:w-[80%] text-white mt-5">
            Nesse Design System fizemos a espinha dorsal que garante
            consistência visual, eficiência no desenvolvimento e satisfação do
            usuário. Com uma abordagem coesa, elevamos a qualidade desse projeto
            e facilidade para implementação.
          </p>

          <div className="md:absolute bottom-5 left-5 mb-10 md:mb-0 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="md:absolute md:-translate-x-1/2 bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>

        <div
          className="w-full h-[447px] bg-red-500 bg-cover bg-no-repeat flex flex-col items-center justify-center relative"
          style={{ backgroundImage: "url('/unicorn-bg.png')" }}
        >
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-32 md:w-44 inline-block my-2" />

          <h2 className="text-2xl md:text-5xl text-center font-extrabold text-white">
            Mini-Cases de UX
          </h2>
          <p className="text-lg md:text-[20px] lg:text-[20px] font-medium text-center w-full md:w-[889.594px] lg:w-[80%] text-white mt-5">
            Durante minha jornada no curso UX Unicórnio, mergulhei profundamente
            nas disciplinas essenciais de Experiência do Usuário (UX). Através
            de mini cases práticos, adquiri conhecimentos valiosos e habilidades
            fundamentais em cada uma delas.
          </p>

          <div className="md:absolute bottom-5 left-5 mb-10 md:mb-0 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="md:absolute md:-translate-x-1/2 bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
