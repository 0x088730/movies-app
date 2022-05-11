import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEditMovie } from "../redux/actions/EditMovie";

import "../styles/formEdit.css";

export const ModalEditMovie = ({ show, setShow, movie }) => {
  const handleClose = () => setShow(false);
  const [data, setData] = useState({
    id: "",
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    vote_average: "",
    genre: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = data.id === "" ? movie && movie.id : data.id;
    const original_title =
      data.original_title === ""
        ? movie && movie.original_title
        : data.original_title;
    const overview =
      data.overview === "" ? movie && movie.overview : data.overview;
    const poster_path =
      data.poster_path === "" ? movie && movie.poster_path : data.poster_path;
    const release_date =
      data.release_date === ""
        ? movie && movie.release_date
        : data.release_date;
    const vote_average =
      data.vote_average === ""
        ? movie && movie.vote_average
        : data.vote_average;
    const genre = data.genre === "" ? movie && movie.genre : data.genre;
    dispatch(
      fetchEditMovie({
        id,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genre,
      })
    );
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-black text-white">
          <Modal.Title>Editar Pelicula</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <form className="bg-black w-full form-edit" onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="id de la pelicula"
              name="id"
              defaultValue={movie && movie.id}
              disabled
            />
            <input
              type="text"
              placeholder="titulo de la pelicula"
              name="original_title"
              defaultValue={movie && movie.original_title}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="descripcion de la pelicula"
              name="overview"
              defaultValue={movie && movie.overview}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="url de la imagen"
              name="poster_path"
              defaultValue={movie && movie.poster_path}
              onChange={handleChange}
            />

            <input
              type="date"
              placeholder="fecha de lanzamiento"
              name="release_date"
              defaultValue={movie && movie.poster_path}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="puntuacion"
              name="vote_average"
              defaultValue={movie && movie.vote_average}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="genero(s)"
              name="genre"
              defaultValue={movie && movie.genre}
              onChange={handleChange}
            />
            <button type="submit" className="add-movie-btn">
              Editar
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
