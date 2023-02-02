import { Plus } from "phosphor-react";

export interface ButtonAddProps {}

export function ButtonAdd() {
  return (
    <button className="bg-green-600 p-1 rounded hover:bg-green-400 focus:bg-green-800">
      <Plus size={32} weight="bold" color="#F2F2F5" />
    </button>
  );
}
