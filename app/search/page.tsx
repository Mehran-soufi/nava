import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Cable,
  DiscAlbum,
  Ham,
  HandMetal,
  Laugh,
  LucideIcon,
  Search,
  Shell,
  TreePalm,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface GenreType {
  title: string;
  link: string;
  color: string;
  icon: LucideIcon;
}
const genre: GenreType[] = [
  {
    title: "پاپ",
    link: "/",
    color: "bg-green-600",
    icon: DiscAlbum,
  },
  {
    title: "رپ",
    link: "/",
    color: "bg-cyan-600",
    icon: Zap,
  },
  {
    title: "الکترونیک",
    link: "/",
    color: "bg-fuchsia-600",
    icon: Cable,
  },
  {
    title: "راک",
    link: "/",
    color: "bg-rose-600",
    icon: HandMetal,
  },
  {
    title: "کردی",
    link: "/",
    color: "bg-amber-600",
    icon: Laugh,
  },
  {
    title: "لری",
    link: "/",
    color: "bg-orange-600",
    icon: Ham,
  },
  {
    title: "ترکی",
    link: "/",
    color: "bg-slate-600",
    icon: Shell,
  },
  {
    title: "عربی",
    link: "/",
    color: "bg-indigo-600",
    icon: TreePalm,
  },
];

export default function SearchPage() {
  return (
    <div className="w-full flex items-center justify-center py-10 select-none ">
      <div className="w-11/12 min-h-screen flex items-center justify-between flex-col">
        {/* Search Input */}
        <div className="w-full flex items-center justify-center">
          <div className="lg:w-1/2 w-11/12 rounded-md border flex items-center justify-center">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-9/12 border-none outline-none px-2  text-lg"
            />
            <Button
              variant={"default"}
              size={"lg"}
              className="w-3/12 cursor-pointer bg-main/80 hover:bg-main flex items-center justify-center gap-1 text-lg"
            >
              <Search />
              <span className="md:inline-block hidden">جستجو</span>
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-4 md:gap-5 lg:gap-10">
          {/* Search Genre */}
          <div className="w-full lg:h-28 flex items-center justify-between lg:flex-row flex-col gap-4">
            <div className="lg:w-1/6 w-full lg:h-full bg-accent flex items-center justify-center rounded-md p-2">
              <p>دسته بندی</p>
            </div>
            <div className="lg:w-5/6 w-full h-full">
              <Carousel
                opts={{
                  align: "center",
                  direction: "rtl",
                }}
                className="w-full h-full"
              >
                <CarouselContent>
                  {genre.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-[70%] md:basis-[32%]  lg:basis-[24%] xl:basis-[19%] h-full"
                    >
                      <div
                        className={`${item.color} rounded-md w-full h-full hover:opacity-60 p-3 flex justify-between flex-col gap-2`}
                      >
                        <div className="w-full flex items-center justify-start">
                          <p className="xl:text-xl font-semibold">
                            {item.title}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-end opacity-70">
                          {<item.icon size={50} />}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          {/* Search Play list */}
          <div className="w-full lg:h-28 flex items-center justify-between lg:flex-row flex-col gap-4">
            <div className="lg:w-1/6 w-full lg:h-full bg-accent flex items-center justify-center rounded-md p-2">
              <p>حال و هوا</p>
            </div>
            <div className="lg:w-5/6 w-full h-full">
              <Carousel
                opts={{
                  align: "center",
                  direction: "rtl",
                }}
                className="w-full h-full"
              >
                <CarouselContent>
                  {genre.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-[70%] md:basis-[32%]  lg:basis-[24%] xl:basis-[19%] h-full"
                    >
                      <div
                        className={`${item.color} rounded-md w-full h-full hover:opacity-60 p-3 flex justify-between flex-col gap-2`}
                      >
                        <div className="w-full flex items-center justify-start">
                          <p className="xl:text-xl font-semibold">
                            {item.title}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-end opacity-70">
                          {<item.icon size={50} />}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
