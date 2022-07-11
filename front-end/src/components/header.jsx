import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dog_logo.png";
import "../assets/header.css";
import UserContext from "./ContextUser";
function Header() {
  const { dataRegister, setDataRegister, session, setSession } = useContext(UserContext);
  useEffect(() => {}, [session]);
  function checkLoginLlayout() {
    if (localStorage.getItem("keyAuth")) {
      return (
        <ul>
          <Link to={"/"}>Adotar</Link>
          <Link to={"/MyPets"}>My pets</Link>
          <Link to={"/update/info/user"}> Perfil </Link>
          <Link
            onClick={() => {
              setSession(false);
              localStorage.removeItem("keyAuth");
              localStorage.removeItem("nomeUser");
              localStorage.removeItem("emailUser");
              localStorage.removeItem("senhaUser");
            }}
            to={"/login"}>
            Sair
          </Link>
        </ul>
      );
    } else {
      return (
        <ul>
          <Link to={"/register"} onClick={() => setDataRegister({})}>
            Cadastrar
          </Link>
          <Link to={"/login"} onClick={() => setDataRegister({})}>
            Entrar
          </Link>
        </ul>
      );
    }
  }

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo Get a Pet" />
        </div>
        {checkLoginLlayout()}
      </header>
    </>
  );
}
export default Header;
