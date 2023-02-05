import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Label from "@radix-ui/react-label";

import { X } from "phosphor-react";
import { useQuery } from "react-query";
import { api } from "../lib/axios";
import { CardFormBody } from "./CardFormBody";

interface CardProps {
  title: string;
  category: string;
  id: string;
}

export function Card({ title, category, id }: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="bg-black-700 w-60 h-32 text-center hover:brightness-90 rounded flex-none"
      >
        <h1 className="font-bold text-lg text-white">{title}</h1>
        <h2 className="font-semibold text-sm text-blue-800">{category}</h2>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black-900/80 fixed inset-0" />
        <Dialog.Content className="absolute p-10 pt-12 bg-zinc-900 rounded w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-700">
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Titulo</Dialog.Title>
          </VisuallyHidden.Root>

          <VisuallyHidden.Root asChild>
            <Dialog.Description>
              Formulario do card, contem todas as informações, edite ou delete
              clicando nos botões correspondentes
            </Dialog.Description>
          </VisuallyHidden.Root>

          <Dialog.Close className="absolute top-3 right-6">
            <X
              weight="light"
              size={28}
              className="text-red-800 hover:text-red-600 "
            />
          </Dialog.Close>

          <CardFormBody id={id} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
