import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const iniciarSesionConFacebook = () => {
    loginFacebook()
      .then((res) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      navigate("/");
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
    <div className="contendor-form">
      <form action="" onSubmit={handleSubmit}>
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
      </form>
      <button onClick={iniciarSesionConGoogle}>Ingresar con Google</button>
      <button onClick={iniciarSesionConFacebook}>Ingrsar con Facebook</button>
    </div>
  );
};

export default Login;
