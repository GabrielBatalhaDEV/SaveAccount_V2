import { ButtonAdd } from "../components/ButtonAdd";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { NotFound } from "../assets";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { CardCarousel } from "../components/CardCarousel";

type CardProps = {
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

export function Home() {
  const [username, setUsername] = useState<string>("Undefined");
  const [cards, setCards] = useState<CardProps>([]);

  useEffect(() => {
    const token = localStorage.getItem("API_TOKEN");

    api
      .get("/account", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        setUsername(res.data.name);
      })
      .catch((err) => console.log(err));

    api
      .get("/card", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header username={username} />

      <div className="flex justify-center gap-2 pt-2 border-t border-black-100 mt-14 mx-40">
        <ButtonAdd />
        <div className="min-w-[400px]">
          <SearchBar />
        </div>
      </div>

      <main className="flex justify-center pl-40">
        {cards.length > 0 ? (
          <CardCarousel cards={cards} />
        ) : (
          <img src={NotFound} alt="Não Encontrado" className="mt-12" />
        )}
      </main>
    </div>
  );
}
