import { useState } from "react";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/sidebar.css";

export const NavBarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cerrarSesion } = useAuth();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <span className="collapse-menu-btn" onClick={toggleDrawer}>
        <i className="fa-solid fa-bars"></i>
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
            <button onClick={() => cerrarSesion()}>Cerrar sesión</button>
          </ul>
        </div>
      </Drawer>
    </>
  );
};
