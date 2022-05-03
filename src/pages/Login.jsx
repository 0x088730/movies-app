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
  const { login } = useAuth();

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
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
    </div>
  );
};

export default Login;
