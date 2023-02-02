import { ArrowRight } from "phosphor-react";
import * as images from "../assets";
import { InputWithIcon } from "../components/InputWithIcon";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [wrongLogin, setWrongLogin] = useState<boolean>(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("API_TOKEN", token);
  }, [token]);

  function handleToast() {
    toast.error("Login Incorreto!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  async function authenticateUser(e: FormEvent) {
    e.preventDefault();

    if (!login || !password) {
      setWrongLogin(true);

      handleToast();

      return;
    }

    console.log(`${login}, ${password}`);

    api
      .post("/login", {
        email: login,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        navigate("/home");
      })
      .catch(() => {
        setWrongLogin(true);
        handleToast();
      });
  }
  return (
    <div className="flex h-full ">
      <ToastContainer />
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

        <form className="px-11 mt-20" onSubmit={authenticateUser}>
          <InputWithIcon
            icon="Email"
            placeholder="Digite seu Email"
            onChange={(e) => setLogin(e.target.value)}
            className={wrongLogin ? `ring-red-800` : ""}
            autoFocus
          />
          <div className="mt-5">
            <InputWithIcon
              icon="Password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              className={wrongLogin ? `ring-red-800` : ""}
            />
          </div>
          <div className="mt-9">
            <button
              type="submit"
              className="bg-primary-600 w-full font-bold text-lg text-white rounded h-12 flex justify-center items-center gap-2 hover:bg-primary-400 focus:bg-primary-800"
            >
              Entrar
              <ArrowRight size={32} color="#f2f2f5" weight="bold" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export { Login };
