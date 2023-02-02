import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Label from "@radix-ui/react-label";

import { X } from "phosphor-react";

interface CardProps {
  title: string;
  category: string;
}

export function Card({ title, category }: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="bg-black-700 w-60 h-32 text-center hover:brightness-90 rounded"
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

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label.Root
                className="text-base font-normal text-black-100"
                htmlFor="Login"
              >
                Login
              </Label.Root>
              <input
                type="text"
                placeholder="E-mail / Usuário"
                className="bg-black-400 rounded-lg p-2 placeholder:text-black-100 outline-none border border-black-100 focus-within:border-primary-600"
              />
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
