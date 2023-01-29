import Carousel, { CarouselItem } from "@/components/carousel";
import Link from "next/link";
import { useState } from "react";

export default function Step3Onboarding() {
  const carouselData: CarouselItem[] = [
    {
      img: "/food/thai.jpg",
      description: "Mountain Side",
    },
    {
      img: "/sample.jpg",
      description: "Big City",
    },
    {
      img: "/food/thai.jpg",
      description: "Beach",
    },
    {
        img: "/food/thai.jpg",
        description: "Canyons",
    },
    {
        img: "/food/thai.jpg",
        description: "Snowy",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<CarouselItem>(
    carouselData[0]
  );

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <div className="absolute w-full text-center top-6 text-sky font-bold text-3xl">
        travyl
      </div>

      <main className="w-full text-center mt-36">
        <h1 className="font-bold text-5xl">pick a location</h1>

        <div className="mt-20">
          <Carousel
            items={carouselData}
            onChange={(itm) => setSelectedItem(itm)}
          />
        </div>
      </main>

      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center">
          <Link
            href="/"
            className="py-3 px-3 mr-2 aspect-square block text-center font-medium text-xl bg-gray-200 text-black rounded-full"
          >
            &nbsp;&larr;&nbsp;
          </Link>
          <Link
            href="/food"
            className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
          >
            next &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}