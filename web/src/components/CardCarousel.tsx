import { Carousel } from "react-responsive-carousel";
import { Card } from "./Card";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface CarouselCardProps {
  cards: {
    id: string;
    accountId: string;
    categoryName: string;
    title: string;
    cardBody: {
      name?: string;
      placeholder?: string;
      value?: string;
    }[];
  }[];
}

export function CardCarousel({ cards }: CarouselCardProps) {
  return (
    <Carousel className="w-screen" showArrows={false} showStatus={false}>
      {cards.map((card) => {
        return (
          <div className="" key={card.id}>
            <Card title={card.title} category={card.categoryName} />
          </div>
        );
      })}
    </Carousel>
  );
}
