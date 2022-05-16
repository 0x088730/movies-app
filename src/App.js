import { Routes, Route } from "react-router-dom";

// context
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";

// public routes
import Home from "./pages/Home";
import MasValoradas from "./pages/MasValoradas";
import MenosValoradas from "./pages/MenosValoradas";
import DetailMovie from "./pages/DetailMovie";
import Perfil from "./pages/Perfil";

// login/register routes
import Login from "./pages/Login";
import Registro from "./pages/Registro";

// Admin routes
import Admin from "./pages/admin/Admin";
import AddMovie from "./pages/admin/AddMovie.jsx";
import AdminMovies from "./pages/admin/AdminMovies";
import DetailMovieAdmin from "./pages/admin/DetailMovieAdmin";

// Protected Routes
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { ProctedRouteAdmin } from "./components/ProctedRouteAdmin";

// floating icon
import { FlaotingIcon } from "./components/FloatingIcon";

import "./App.css";

function App() {
  return (
    <div className="container-app">
      <AuthProvider>
        <FlaotingIcon />
        <SearchProvider>
          <Routes>
            {/* Public Routes */}
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
              path="/movie/:idMovie"
              element={
                <ProtectedRoutes>
                  <DetailMovie />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/perfil"
              element={
                <ProtectedRoutes>
                  <Perfil />
                </ProtectedRoutes>
              }
            />

            {/* Admin routes */}
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
            <Route
              path="/admin/movie/:idMovie"
              element={
                <ProtectedRoutes>
                  <ProctedRouteAdmin>
                    <DetailMovieAdmin />
                  </ProctedRouteAdmin>
                </ProtectedRoutes>
              }
            />

            {/* login/register routes */}
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
