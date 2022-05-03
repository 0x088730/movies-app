import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const context = createContext();

export const useAuth = () => useContext(context);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  const registro = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const cerrarSesion = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioActual) => {
      setUserState(usuarioActual);
      setLoading(false);
    });
  }, []);

  return (
    <context.Provider
      value={{ registro, login, userState, loading, cerrarSesion }}
    >
      {children}
    </context.Provider>
  );
};
