import { useQuery } from "react-query";
import { api } from "../lib/axios";
import * as Label from "@radix-ui/react-label";
import { PencilSimpleLine, TrashSimple } from "phosphor-react";

interface ResponseProps {
  id: string;
  accountId: string;
  title: string;
  cardBody: {
    name: string;
    placeholder: string;
    value: string;
  }[];
  categoryName: string;
  createdAt: string;
}

interface CardFormBodyProps {
  id: string;
}

export function CardFormBody({ id }: CardFormBodyProps) {
  const { data } = useQuery<ResponseProps>(`card_${id}`, async () => {
    const token = sessionStorage.getItem("AUTH_TOKEN");
    const response = await api.get(`/card/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  });

  return (
    <form className="flex flex-col gap-4">
      {data?.cardBody.map((item, index) => {
        return (
          <div className="flex flex-col gap-1" key={index}>
            <Label.Root
              className="text-base font-normal text-black-100"
              htmlFor={item.name}
            >
              {item.name}
            </Label.Root>
            <input
              type="text"
              placeholder={item.placeholder}
              className="bg-black-400 rounded-lg p-2 placeholder:text-black-100 outline-none border border-black-100 focus-within:border-primary-600"
              disabled
              value={item.value}
            />
          </div>
        );
      })}

      <div className="flex justify-around font-bold mt-8">
        <button className="flex px-6 py-3 bg-orange-800 hover:bg-orange-600 rounded">
          <PencilSimpleLine size={24} color="#ffff" />
          <span>Editar</span>
        </button>
        <button className="flex px-6 py-3 bg-red-800 hover:bg-red-600 rounded">
          <TrashSimple size={24} color="#ffff" />
          <span>Deletar</span>
        </button>
      </div>
    </form>
  );
}
