import { MagnifyingGlass } from "phosphor-react";
import { useRef } from "react";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div
      className="flex bg-black-900 gap-2 p-2 pr-0 rounded border border-white text-white cursor-text"
      onClick={handleFocus}
    >
      <MagnifyingGlass size={28} weight="regular" color="#0063F7" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite o nome ou categoria do card"
        className="w-full outline-none bg-transparent "
      />
    </div>
  );
}
