import { At, Password } from "phosphor-react";
import { useRef, useState } from "react";

type Icons = "Password" | "Email";

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: Icons;
  placeholder: string;
}

export function InputWithIcon({
  icon,
  placeholder,

  ...props
}: InputWithIconProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div
      onClick={handleFocus}
      className={`${props.className} group cursor-text bg-black-900 min-w-full flex gap-2 items-center  ring ring-black-900 rounded focus-within:ring-primary-800 hover:ring-primary-800`}
    >
      {icon === "Email" ? (
        <At size={32} color="#555770" className="m-3 mr-0" />
      ) : (
        <Password size={32} color="#555770" className="m-3 mr-0 " />
      )}

      <input
        {...props}
        type={icon}
        placeholder={placeholder}
        className="bg-black-900 outline-none text-white"
        ref={inputRef}
      ></input>
    </div>
  );
}
