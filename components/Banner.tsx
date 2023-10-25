import Image from "next/image";

export function Banner() {
  return (
    <section className="bg-neutral-800 w-full p-4 md:h-[279px]  flex flex-wrap items-center justify-evenly">
      <div className="w-[225px] h-[223px]">
        <Image
          src="/unicorn.svg"
          alt=""
          width={542}
          height={518}
          className="w-full h-full"
        />
      </div>

      <div className="w-[225px] h-[223px]">
        <Image
          src="/ibm.svg"
          alt=""
          width={542}
          height={518}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
