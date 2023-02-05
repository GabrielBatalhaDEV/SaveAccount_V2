import { useQuery } from "react-query";
import { Logo } from "../assets";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { UserContext } from "../pages/Home";
import { useContext, useEffect } from "react";

export function Header() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("AUTH_TOKEN");

  const { isCardsExists, setIsCardsExists } = useContext(UserContext);

  const { data, isLoading } = useQuery(
    "user",
    async () => {
      const response = await api.get("/account", {
        headers: { Authorization: `bearer ${token}` },
      });

      return response.data;
    },
    {
      onError: () => {
        sessionStorage.removeItem("AUTH_TOKEN");
        navigate("/");
      },
      onSuccess: (data) => {
        if (data._count.Card > 0) setIsCardsExists(true);
        else setIsCardsExists(false);
      },
    }
  );

  return (
    <div className="bg-black-700 text-center py-8">
      <img src={Logo} alt="Logo SaveAccount" className="m-auto" />

      <h1 className="text-2xl font-bold text-white flex justify-center">
        {isLoading ? (
          <ReactLoading
            type="spinningBubbles"
            width={24}
            height={24}
            color="#0063F7"
          />
        ) : (
          <>
            <span>Bem-Vindo</span>
            <span className="text-blue-800 ml-2">{data.name}</span>
          </>
        )}
      </h1>
    </div>
  );
}
