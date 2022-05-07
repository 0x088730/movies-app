import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/actions/moviesAction";
import "../../styles/admin.css";

const Admin = () => {
  const { userState } = useAuth();
  const data = useSelector((movies) => movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <NavBarAdmin />
      <div className="container-admin">
        <img src={userState.photoURL} alt="" />
        <h1>{userState.displayName}</h1>
        <div className="info">
          <div className="total-movies">
            <h2>Total peliculas</h2>
            {data.dataMovies.status === "succeded" ? (
              <p>{data.dataMovies.movies.length}</p>
            ) : (
              <div className="">
                <img
                  src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
            )}
          </div>
          <Link to="movies" className="link-to-movies">
            Ver Todas las peliculas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
