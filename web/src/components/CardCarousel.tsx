import clsx from "clsx";
import { Card } from "./Card";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef, useState } from "react";

import { MouseEvent } from "react";

interface CarouselCardProps {
  categoryName: string;
  cardsData: {
    id: string;
    accountId: string;
    categoryName: string;
    title: string;
    cardBody: {
      name?: string;
      placeholder?: string;
      value?: string;
    };
  }[];
}

export function CardCarousel({ cardsData, categoryName }: CarouselCardProps) {
  const carousel = useRef<HTMLDivElement>(null);

  function handleLeftClick(e: MouseEvent) {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }

  function handleRightClick(e: MouseEvent) {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  }

  return (
    <section>
      <div className="flex flex-col">
        <h1 className="pl-8 text-lg text-black-400 font-bold">
          {categoryName}
        </h1>
        <div className="flex">
          <button onClick={handleLeftClick} className="min-w-[32px]">
            <CaretLeft size={32} color="#ffffff" className="cursor-pointer" />
          </button>

          <div
            className="flex overflow-x-auto scroll-smooth gap-2 "
            ref={carousel}
          >
            {cardsData.map((card) => (
              <Card
                title={card.title}
                category={card.categoryName}
                id={card.id}
                key={card.id}
              />
            ))}
          </div>
          <button onClick={handleRightClick} className="min-w-[32px]">
            <CaretRight
              size={32}
              color="#ffffff"
              className="cursor-pointer hover:brightness-75"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
