import MusicItem from "@/components/MusicItem";

export default function HomePage() {
  return (
    <div className="w-full flex items-center justify-center py-2 overflow-x-hidden flex-col gap-10">
      <MusicItem slideNumber={"basis-[90%] md:basis-1/2 lg:basis-1/3"} />
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <div className="w-[90%]">
          <p className="font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg text-main/80">
            برترین ها
          </p>
        </div>
        <MusicItem slideNumber={"basis-[70%] md:basis-1/3 lg:basis-1/5"} />
      </div>
    </div>
  );
}
