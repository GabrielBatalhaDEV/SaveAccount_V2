import { Logo } from "../assets";

export interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  return (
    <div className="bg-black-700 text-center py-8">
      <img src={Logo} alt="Logo SaveAccount" className="m-auto" />
      <h1 className="text-2xl font-bold text-white">
        Olá, <span className="text-blue-800">{username}</span>
      </h1>
    </div>
  );
}
