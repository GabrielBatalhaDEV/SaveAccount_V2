import { ArrowFatLineUp, At, Password } from "phosphor-react";
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

  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  // This function is triggered on the keyup event
  const checkCapsLock = (event: any) => {
    if (event.getModifierState("CapsLock")) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div
      onClick={handleFocus}
      className={`${props.className} group cursor-text p-3 bg-black-900 min-w-full flex gap-2 items-center  ring ring-black-900 rounded focus-within:ring-primary-800 hover:ring-primary-800`}
    >
      {icon === "Email" ? (
        <At size={32} color="#555770" />
      ) : (
        <Password size={32} color="#555770" />
      )}

      <input
        {...props}
        type={icon}
        placeholder={placeholder}
        className="bg-black-900 outline-none text-white flex-1"
        ref={inputRef}
        onKeyDown={checkCapsLock}
      ></input>

      {isCapsLockOn && (
        <ArrowFatLineUp size={24} color="white" weight="bold" className="w-8" />
      )}
    </div>
  );
}
