import { ArrowRight } from "phosphor-react";

export interface ButtonBlueProps {
  text: string;
  className?: string;
}

export function ButtonBlue({ text, className }: ButtonBlueProps) {
  return (
    <button
      className={`bg-primary-600 w-full font-bold text-lg text-white rounded h-12 flex justify-center items-center gap-2 hover:bg-primary-400 focus:bg-primary-800 ${className}`}
    >
      {text}
      <ArrowRight size={32} color="#f2f2f5" weight="bold" />
    </button>
  );
}
