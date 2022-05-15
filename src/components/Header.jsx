import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { Carrousel } from "./Carrousel";
import { useSearchContext } from "../context/SearchContext";

export const Header = () => {
  const { handleSearch } = useSearchContext();

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
          <input
            type="search"
            placeholder="Busca tu pelicaula favorita"
            onChange={({ target }) => handleSearch(target.value)}
          />
          <span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </header>
      <Carrousel />
    </div>
  );
};
