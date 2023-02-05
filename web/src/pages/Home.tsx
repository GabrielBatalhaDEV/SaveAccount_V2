import { ButtonAdd } from "../components/ButtonAdd";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import React, { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NotFound } from "../assets";
import { CardCarousel } from "../components/CardCarousel";

import { createContext } from "react";

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

type UserContextProps = {
  isCardsExists: boolean;
  setIsCardsExists: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextProps>({
  isCardsExists: false,
  setIsCardsExists: () => {},
});

export function Home() {
  const [recentsCards, setRecentsCards] = useState<CardDataProps>([]);
  const [isCardsExists, setIsCardsExists] = useState(false);

  const token = sessionStorage.getItem("AUTH_TOKEN");

  function fetchUser() {}

  useEffect(() => {
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
    }
  }, [recentsCards]);

  return (
    <div>
      <UserContext.Provider value={{ isCardsExists, setIsCardsExists }}>
        <Header />
      </UserContext.Provider>
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
