import Image from "next/image";

export function Banner() {
  return (
    <section className="bg-neutral-800 w-full h-[247px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between  h-[247]  w-[640px] ">
        <Image
          src="/unicorn.svg"
          alt="Banner"
          width={200}
          height={247}
          className=" object-cover h-24 w-24	"
        />
        <Image
          src="/ibm.svg"
          alt="Banner"
          width={200}
          height={247}
          className=" object-cover h-24 w-24	"
        />
      </div>
    </section>
  );
}
