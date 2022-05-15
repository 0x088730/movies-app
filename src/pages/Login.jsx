import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

import "../styles/formLoginRegister.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login, loginGoogle, loginFacebook } = useAuth();

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };

  const iniciarSesionConGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const iniciarSesionConFacebook = () => {
    loginFacebook()
      .then((res) => {
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      navigate("/admin");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "contraseña incorrecta",
        });
      }
      if (error.code === "auth/user-not-found") {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "usuario no existe",
        });
      }
    }
  };

  return (
    <div className="contenedor-form">
      <div className="opacity-contenedor-form">
        <div className="form-content">
          <form action="" onSubmit={handleSubmit} className="form-login">
            <h1>Iniciar sesion</h1>
            <input
              type="email"
              name="email"
              placeholder="ingresa tu correo"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="ingresa tu contraseña"
              onChange={handleChange}
            />
            <button>inciar sesión</button>
            <Link to={"/registrarse"} className="redirect-to">
              No tienes cuenta?
            </Link>
          </form>
          <div className="login-google-facebook">
            <button onClick={iniciarSesionConGoogle}>
              <img
                src="https://res.cloudinary.com/dp9zv16le/image/upload/v1652483629/sprint-3/icons8-google_szydpu.svg"
                alt=""
              />
              Login con Google
            </button>
            <button onClick={iniciarSesionConFacebook}>
              <img
                src="https://res.cloudinary.com/dp9zv16le/image/upload/v1652483862/sprint-3/icons8-facebook_vhqlrt.svg"
                alt=""
              />
              Login con Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
