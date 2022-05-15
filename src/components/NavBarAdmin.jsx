import { useState } from "react";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { Logout } from "./Logout";

export const NavBarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <span className="collapse-menu-btn" onClick={toggleDrawer}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </span>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer"
      >
        <div className="menu">
          <ul>
            <Link to="/admin" className="link">
              Admin
            </Link>
            <Link to="/admin/add-movie" className="link">
              Añadir
            </Link>
            <Link to="/admin/movies" className="link">
              Ver Peliculas
            </Link>
            <Logout />
          </ul>
        </div>
      </Drawer>
    </>
  );
};
