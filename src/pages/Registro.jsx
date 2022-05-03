import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const Registro = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { registro } = useAuth();

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
      <div className="contendor-form">
        <form action="" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default Registro;
