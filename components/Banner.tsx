import Image from "next/image";

export function Banner() {
  return (
    <section className="bg-neutral-800 w-full h-[247px] flex items-center justify-center">
      <div className="flex justify-between  h-[247]  w-[640px] ">
        <Image src="/unicorn.svg" alt="Banner" width={200} height={247} />
        <Image src="/ibm.svg" alt="Banner" width={200} height={247} />
      </div>
    </section>
  );
}
