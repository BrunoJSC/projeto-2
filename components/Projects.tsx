import Image from "next/image";

export function Projects() {
  return (
    <section>
      <h1 className="text-[58px] text-center font-extrabold text-white my-5">
        Meus Projectos
      </h1>

      <div className="max-w-[90%] mx-auto border border-[#00FFBD]">
        <div className="w-full h-[447px]  bg-[url('/florest.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center relative">
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-[180px] inline-block my-2" />

          <h2 className="text-[40px] text-center font-extrabold text-white">
            Cuidados com a saúde (All-in-One)
          </h2>
          <p className="text-[20px] font-medium text-center w-[890px] text-white">
            Identificar as principais dificuldades que as pessoas têm para se
            manterem saudáveis no dia a dia e projetar uma solução unificada
            para ajudá-las (preparador físico, médico, nutricionista, etc).
          </p>

          <div className="absolute bottom-5 left-5 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="absolute -translate-x-[50%] bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>

        <div className="w-full h-[447px] bg-red-500 bg-[url('/design.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center relative">
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-[180px] inline-block my-2" />

          <h2 className="text-[40px] text-center font-extrabold text-white">
            Design System
          </h2>
          <p className="text-[20px] font-medium text-center w-[890px] text-white">
            Nesse Design System fizemos a espinha dorsal que garante
            consistência visual, eficiência no desenvolvimento e satisfação do
            usuário. Com uma abordagem coesa, elevamos a qualidade desse projeto
            e facilidade para implementação.
          </p>

          <div className="absolute bottom-5 left-5 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="absolute -translate-x-[50%] bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>

        <div className="w-full h-[447px] bg-red-500 bg-[url('/unicorn-bg.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center relative">
          <p className="text-[#ABAAAA]">Caso de estudo</p>
          <div className="border-4 border-white w-[180px] inline-block my-2" />

          <h2 className="text-[40px] text-center font-extrabold text-white">
            Mini-Cases de UX
          </h2>
          <p className="text-[20px] font-medium text-center w-[890px] text-white">
            Durante minha jornada no curso UX Unicórnio, mergulhei profundamente
            nas disciplinas essenciais de Experiência do Usuário (UX). Através
            de mini cases práticos, adquiri conhecimentos valiosos e habilidades
            fundamentais em cada uma delas.
          </p>

          <div className="absolute bottom-5 left-5 bg-red-500">
            <span>Complexo</span>
          </div>

          <div className="absolute -translate-x-[50%] bottom-5">
            <Image src="/arrow.svg" alt="" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
