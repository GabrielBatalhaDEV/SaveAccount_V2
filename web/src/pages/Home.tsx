import { ButtonAdd } from "../components/ButtonAdd";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NotFound } from "../assets";
import { CardCarousel } from "../components/CardCarousel";

type CardDataProps = {
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

export function Home() {
  const [username, setUsername] = useState<string>("Undefined");
  const [recentsCards, setRecentsCards] = useState<CardDataProps>([]);

  const [isCardsExists, setIsCardsExists] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("API_TOKEN");

    api
      .get("/account", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        setUsername(res.data.name);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    api
      .get("/card", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => setRecentsCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (recentsCards.length > 0) {
      setIsCardsExists(true);
    }
  }, [recentsCards]);

  return (
    <div>
      <Header username={username} />

      <div className="flex justify-center gap-2 pt-2 border-t border-black-100 mt-14 mx-40">
        <ButtonAdd />
        <div className="min-w-[400px]">
          <SearchBar />
        </div>
      </div>

      <main className="mx-auto max-w-[90vw]">
        {isCardsExists ? (
          <div className="flex flex-col mt-4 gap-5">
            <CardCarousel categoryName="Recentes" cardsData={recentsCards} />
            <CardCarousel categoryName="Games" cardsData={recentsCards} />
          </div>
        ) : (
          <div className="flex justify-center ">
            <img src={NotFound} alt="Não Encontrado" className="mt-12" />
          </div>
        )}
      </main>
    </div>
  );
}
