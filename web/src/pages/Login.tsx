import * as images from "../assets";
import { ButtonBlue } from "../components/ButtonBlue/ButtonBlue";
import { InputWithIcon } from "../components/InputWithIcon/InputWithIcon";

function Login() {
  return (
    <div className="flex h-full ">
      <aside className="bg-black-900 flex-grow pt-8">
        <img src={images.Logo} alt="Logo Save Account" className="m-auto" />
        <img
          src={images.WorkAbroad}
          alt="Logo Save Account"
          className="m-auto mt-28"
        />
      </aside>
      <main className="bg-black-700 w-[500px] text-center">
        <h1 className="text-4xl font-bold mt-8">Bem-Vindo</h1>
        <h2 className="text-2xl font-bold mt-28">Login</h2>
        <p className="text-sm font-semibold text-black-100 mt-6">
          Entre com suas credencias para acessar sua conta
        </p>

        <div className="px-11 mt-20">
          <InputWithIcon type="email" placeholder="Digite seu Email" />
          <InputWithIcon
            type="password"
            placeholder="Digite sua senha"
            className="mt-5"
          />
          <ButtonBlue text="Entrar" className="mt-9" />
        </div>
      </main>
    </div>
  );
}

export { Login };
