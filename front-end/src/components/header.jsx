import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dog_logo.png";
import "../assets/header.css";
import UserContext from "./ContextUser";
function Header() {
  const { resultApi, setResultApi, dataRegister, setDataRegister, session, setSession } = useContext(UserContext);

  function checkLoginLlayout() {
    if (session) {
      return (
        <>
          <a href="">Bem-vindo</a>
          <Link
            onClick={() => {
              setSession(false);
            }}
            to={"/login"}>
            Sair
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to={"/register"} onClick={() => setDataRegister({})}>
            Cadastrar
          </Link>
          <Link to={"/login"} onClick={() => setDataRegister({})}>
            Entrar
          </Link>
        </>
      );
    }
  }

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo Get a Pet" />
        </div>
        <ul>
          <li></li>
          <li>{checkLoginLlayout()}</li>
        </ul>
      </header>
    </>
  );
}
export default Header;
