import Image from "next/image";

export function Process() {
  return (
    <section>
      <hr className="border-gray-600 mx-auto max-w-[90%] my-20" />
      <h1 className="text-[58px] text-center font-extrabold text-white my-5">
        Processo de UX
      </h1>

      <p className="max-w-3xl md:max-w-[1328px] text-lg md:text-[20px] font-normal text-center leading-relaxed text-white mx-auto px-4 md:px-0 text-[20px]">
        A essência do meu processo de UX reside em identificar e compreender
        cuidadosamente o problema a ser abordado. Através de uma abordagem
        centrada no usuário, realizo pesquisas e iterações constantes para
        garantir que a solução final seja verdadeiramente adaptada às
        necessidades dos usuários.
      </p>

      <div className="max-w-[1350px] mx-auto flex flex-wrap items-center justify-around mt-5">
        <Image
          src="/diamond.png"
          alt=""
          width={942}
          height={918}
          className="w-full"
        />
      </div>
    </section>
  );
}
