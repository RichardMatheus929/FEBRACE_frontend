import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import imgFebrace from "./img/febrace.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="img">
        <a href="https://febrace.org.br/">
          <img src={imgFebrace} alt="FEBRACE" />
          {/* <link type="image" href="src\components\img\febrace.png" /> */}
        </a>
      </div>
      <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`rotas-navbar ${menuOpen ? "show" : ""}`}>
        <li><Link to={'/'}>Página inicial</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li><Link to={"/projetos"} className="allprojects">Consultar todos os projetos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
