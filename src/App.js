import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import MasValoradas from "./pages/MasValoradas";
import MenosValoradas from "./pages/MenosValoradas";
import Admin from "./pages/admin/Admin";
import AddMovie from "./pages/admin/AddMovie.jsx";
import AdminMovies from "./pages/admin/AdminMovies";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { ProctedRouteAdmin } from "./components/ProctedRouteAdmin";

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
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <ProctedRouteAdmin>
                  <Admin />
                </ProctedRouteAdmin>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/add-movie"
            element={
              <ProtectedRoutes>
                <ProctedRouteAdmin>
                  <AddMovie />
                </ProctedRouteAdmin>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/movies"
            element={
              <ProtectedRoutes>
                <ProctedRouteAdmin>
                  <AdminMovies />
                </ProctedRouteAdmin>
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
