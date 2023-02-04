import { Card } from "./Card";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";

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
      carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
    }
  }

  function handleRightClick(e: MouseEvent) {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
    }
  }

  return (
    <section>
      <div className="flex flex-col">
        <h1 className="pl-8 text-lg text-black-400 font-bold">
          {categoryName}
        </h1>
        <div className="flex">
          <button onClick={handleLeftClick}>
            <CaretLeft size={32} color="#f2f2f5" className="cursor-pointer" />
          </button>
          <div
            className="flex overflow-x-hidden scroll-smooth gap-2 "
            ref={carousel}
          >
            {cardsData.map((card) => (
              <Card
                title={card.title}
                category={card.categoryName}
                key={card.id}
              />
            ))}
          </div>
          <button onClick={handleRightClick}>
            <CaretRight size={32} color="#f2f2f5" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
}
