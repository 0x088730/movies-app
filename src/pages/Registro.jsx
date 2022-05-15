import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

import "../styles/formLoginRegister.css";

const Registro = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { registro, loginGoogle, loginFacebook } = useAuth();

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

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registro(data.email, data.password);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "usuario creado",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => navigate("/login"));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El correo ya existe",
        });
      }
      if (error.code === "auth/weak-password") {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La contrseña debe ser minimo de 6 caracteres",
        });
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "hubo un error inesperado",
      });
    }
  };

  return (
    <div>
      <div className="contenedor-form">
        <div className="opacity-contenedor-form">
          <div className="form-content">
            <form action="" onSubmit={handleSubmit} className="form-login">
              <h1>Registrarme</h1>
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
              <button>Registrarme</button>
              <Link to={"/login"} className="redirect-to">
                Ya tienes cuenta?
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
    </div>
  );
};

export default Registro;
