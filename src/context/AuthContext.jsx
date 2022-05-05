import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
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

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
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
      value={{
        registro,
        login,
        userState,
        loading,
        loginGoogle,
        loginFacebook,
        cerrarSesion,
      }}
    >
      {children}
    </context.Provider>
  );
};
