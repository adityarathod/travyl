/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export interface CarouselItem {
  img: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  onChange: (itm: CarouselItem) => unknown;
}

export default function Carousel({ items, onChange }: CarouselProps) {
  const [curItem, setCurItem] = useState<number>(0);

  const incrementItem = () => {
    if (curItem >= items.length - 1) {
      setCurItem(0);
      return;
    }
    setCurItem(curItem + 1);
  };

  const decrementItem = () => {
    if (curItem <= 0) {
      setCurItem(items.length - 1);
      return;
    }
    setCurItem(curItem - 1);
  };

  useEffect(() => {
    onChange(items[curItem]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curItem]);

  return (
    <>
      <div className="px-8 w-full flex flex-row items-center justify-center">
        <button className="text-3xl font-bold" onClick={decrementItem}>
          &larr;
        </button>
        <img
          src={items[curItem].img}
          className="rounded-full aspect-square w-5/6 mx-2"
          alt={items[curItem].description}
        />
        <button className="text-3xl font-bold" onClick={incrementItem}>
          &rarr;
        </button>
      </div>
      <h2 className="mt-12 text-4xl text-center font-medium">
        {items[curItem].description}
      </h2>
    </>
  );
}
