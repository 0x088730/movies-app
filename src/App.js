import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import MasValoradas from "./pages/MasValoradas";
import MenosValoradas from "./pages/MenosValoradas";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

import "./App.css";

function App() {
  return (
    <div className="container-app">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/mas-valoradas"
            element={
              <ProtectedRoutes>
                <MasValoradas />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/menos-valoradas"
            element={
              <ProtectedRoutes>
                <MenosValoradas />
              </ProtectedRoutes>
            }
          />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
