import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { Carrousel } from "./Carrousel";

export const Header = () => {
  return (
    <div>
      <header>
        <img
          src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651814746/sprint-3/logo-blockBuster_e1nlgc.png"
          alt=""
        />
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Todas
          </NavLink>
          <NavLink
            to="/mas-valoradas"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Más valoradas
          </NavLink>
          <NavLink
            to="/menos-valoradas"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Menos valoradas
          </NavLink>
        </ul>
        <div className="container-search">
          <input type="search" placeholder="Busca tu pelicaula favorita" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </header>
      <Carrousel />
    </div>
  );
};
