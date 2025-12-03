import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { EllipsisVertical, Play } from "lucide-react";

const music = [
  {
    title: "خیلی ممنون",
    singer: "سیاوش قمیشی",
    poster: "/assets/poster/Siavash-Ghomayshi-kheyli-mamnoon.jpg",
  },
  {
    title: "ساعت دیواری",
    singer: "محسن چاووشی",
    poster: "/assets/poster/chavooshi.jpg",
  },
  {
    title: "خیلی ممنون",
    singer: "سیاوش قمیشی",
    poster: "/assets/poster/Siavash-Ghomayshi-kheyli-mamnoon.jpg",
  },
  {
    title: "ساعت دیواری",
    singer: "محسن چاووشی",
    poster: "/assets/poster/chavooshi.jpg",
  },
  {
    title: "خیلی ممنون",
    singer: "سیاوش قمیشی",
    poster: "/assets/poster/Siavash-Ghomayshi-kheyli-mamnoon.jpg",
  },
];

function HeroSection() {
  return (
    <Carousel
      opts={{
        align: "start",
        direction: "rtl",
      }}
      className="lg:w-full w-11/12 max-w-11/12"
    >
      <CarouselContent>
        {music.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] md:basis-1/2 lg:basis-1/3 group"
          >
            <Link target="_blank" href={"/"}>
              <Card className="p-0 overflow-hidden bg-transparent border-0 shadow-none rounded-md">
                <CardContent className="w-full md:h-[40vh] h-[35vh] flex flex-col gap-1.5 items-center justify-center p-0">
                  <div className="w-full h-9/12 relative p-0 rounded-md overflow-hidden">
                    {/* Poster */}
                    <Image fill src={item.poster} alt={item.title} />
                    {/* More Buttons */}
                    <div
                      className="absolute -bottom-full right-0 transition-all duration-500 ease-in-out 
                    w-full p-2 opacity-0 flex items-center justify-between group-hover:opacity-100 group-hover:bottom-0"
                    >
                      <Button
                        variant={"default"}
                        className="rounded-full xl:w-12 lg:w-10 xl:h-12 lg:h-10 md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                      >
                        <Play />
                      </Button>
                                 <Button
                        variant={"default"}
                        className="rounded-full xl:w-12 lg:w-10 xl:h-12 lg:h-10 md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                      >
                       <EllipsisVertical />
                      </Button>
                    </div>
                  </div>
                  <div className="w-full h-3/12">
                    <div className="w-full h-full">
                      {/* Title */}
                      <h2 className="xl:text-2xl md:text-xl text-xl font-semibold">
                        {item.title}
                      </h2>
                      {/* Singer */}
                      <p className="md:text-lg dark:text-slate-300 text-slate-600">{item.singer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-1 md:-left-6 lg:-left-8 xl:-left-10 xl:w-12 lg:w-10 xl:h-12 lg:h-10 flex items-center justify-center bg-secondary  rounded-full shadow-lg cursor-pointer opacity-100" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-1 md:-right-6 lg:-right-8 xl:-right-10 xl:w-12 lg:w-10 xl:h-12 lg:h-10 flex items-center justify-center bg-secondary  rounded-full shadow-lg cursor-pointer opacity-100" />
    </Carousel>
  );
}

export default HeroSection;
