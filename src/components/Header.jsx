import Logo from "../images/Nota_Segura.png";
import { Link } from "react-router-dom";
import "../components/Header.modules.css"

export function Header() {
  return (
    <nav>
      <div className="logo-lema">
        <Link to={"/"}>
          <img className="logo" src={Logo} />
        </Link>
        <p>Aseguramos tu música</p>
      </div>
      <div className="botones">
        <button>Crear cuenta</button>
        <button>Iniciar sesion</button>
      </div>
    </nav>
  );
}
