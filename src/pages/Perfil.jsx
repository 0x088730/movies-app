import { MapView } from "../components/MapView";
import { useAuth } from "../context/AuthContext";

import "../styles/perfil.css";

const Perfil = () => {
  const { userState } = useAuth();

  return (
    <div className="px-10 py-5">
      <div className="flex flex-col items-center gap-5 mb-10">
        {userState.photoURL ? (
          <img src={userState.photoURL} alt="" className="w-44 rounded-full" />
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
        <h1 className="text-2xl">{userState.displayName || userState.email}</h1>
      </div>
      <MapView />
    </div>
  );
};

export default Perfil;
