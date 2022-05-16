import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";
import { useAuth } from "../context/AuthContext";

import "../styles/floatingIcon.css";

export const FlaotingIcon = () => {
  const [stateList, setStateList] = useState(false);
  const { userState } = useAuth();

  if (!userState) return null;

  const { photoURL, email } = userState;

  return createPortal(
    <div className="floating-icon fixed z-50 bottom-0 right-0 flex flex-col items-center">
      {email === "dilanespindola29@gmail.com" ? (
        <div className="list rounded-2xl text-white mb-8 p-2 img-floating">
          <NavLink to="/">
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </NavLink>
          <NavLink to="/admin">
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <Logout>
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Logout>
        </div>
      ) : (
        <div className="list rounded-2xl text-white mb-8 p-2 img-floating">
          <NavLink to="/">
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </NavLink>
          <NavLink to="/perfil">
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <Logout>
            <svg
              className="w-6 h-6 link-floating"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Logout>
        </div>
      )}
      {photoURL ? (
        <img
          src={photoURL}
          alt=""
          className="w-16 rounded-full"
          onClick={() => setStateList(true)}
        />
      ) : (
        <svg
          className="w-16 text-white bg-black rounded-full p-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>,
    document.querySelector("#floating-icon")
  );
};
