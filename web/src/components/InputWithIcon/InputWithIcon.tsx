import { At, Password } from "phosphor-react";

export interface InputWithIconProps {
  type: string;
  placeholder: string;
  className?: string;
}

export function InputWithIcon({
  type,
  placeholder,
  className,
}: InputWithIconProps) {
  return (
    <div
      className={`${className} bg-black-900 min-w-full flex gap-2 items-center border border-black-900 rounded focus-within:border-primary-800 hover:border-primary-800`}
    >
      {type === "email" ? (
        <At size={32} color="#555770" className="m-3 mr-0" />
      ) : (
        <Password size={32} color="#555770" className="m-3 mr-0" />
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="bg-black-900 outline-none text-white w-full "
      ></input>
    </div>
  );
}
