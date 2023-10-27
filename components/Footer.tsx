import Image from "next/image";

const iconPaths = ["/linkedin.svg", "/instagram.svg", "/gmail.svg"];

export function Footer() {
  return (
    <footer className="w-full min-h-screen bg-neutral-800 flex flex-col items-center justify-evenly relative p-5">
      <div className="w-full flex flex-col items-center md:flex-row md:items-center justify-evenly md:justify-around ">
        <div className="w-full md:w-2/5 lg:w-[443.681px] md:mr-10">
          <h1 className="text-lg md:text-4xl font-extrabold leading-relaxed text-white text-center md:text-left">
            Vamos criar uma solução inovadora para as pessoas?
          </h1>

          <div className="w-full md:w-[200px] flex items-center justify-center md:justify-between mt-5">
            {iconPaths.map((path, index) => (
              <Image
                key={index}
                src={path}
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 md:w-10 md:h-10 mx-2"
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-[398px] flex items-center justify-center mt-5 md:mt-0 ">
          <Image
            src="/logo.svg"
            alt=""
            width={542}
            height={518}
            className="w-full h-auto md:w-[398px] md:h-[150px] object-contain"
          />
        </div>
      </div>

      <div className="mt-5 md:mt-0">
        <Image src="/arrow.svg" alt="" width={50} height={50} />
      </div>

      <p className="text-xs md:text-sm absolute bottom-0 left-0 right-0 text-center">
        2023- Matheus Damasceno Portfolio UX/UI © Todos direitos reservados
      </p>
    </footer>
  );
}
