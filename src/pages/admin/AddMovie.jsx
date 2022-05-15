import { useState } from "react";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddMovie } from "../../redux/actions/addMovieAction";
import { Loading } from "../../components/Loading";
import Swal from "sweetalert2";

import "../../styles/addMovie.css";

const AddMovie = () => {
  const dispatch = useDispatch();
  const { statusMovies } = useSelector((store) => store);

  console.log(statusMovies);

  const validation = Yup.object({
    id: Yup.number().required("el id es requerido"),
    original_title: Yup.string().required("Titulo es requerido"),
    overview: Yup.string().required("descricion es requerida"),
    poster_path: Yup.string().required("url de la imagen es requerida"),
    release_date: Yup.date().required("fecha de lanzamiento requerida"),
    vote_average: Yup.number().required("puntuacion requerida"),
    genre: Yup.string().required("genero requerido"),
  });

  if (statusMovies.status === "pending") return <Loading />;

  if (statusMovies.status === "succeded") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pelicula agregada",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <>
      <NavBarAdmin />
      <div className="container-form-add-movie">
        <Formik
          initialValues={{
            id: "",
            original_title: "",
            overview: "",
            poster_path: "",
            release_date: "",
            vote_average: "",
            genre: "",
          }}
          validationSchema={validation}
          onSubmit={(dataForm, { resetForm }) => {
            dispatch(fetchAddMovie(dataForm));
            resetForm();
          }}
        >
          <Form className="form-add-movie">
            <h2>Añade una nueva pelicula</h2>

            <span style={{ color: "red" }}>
              <ErrorMessage name="id" />
            </span>
            <Field type="number" placeholder="id de la pelicula" name="id" />

            <span style={{ color: "red" }}>
              <ErrorMessage name="original_title" />
            </span>
            <Field
              type="text"
              placeholder="titulo de la pelicula"
              name="original_title"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="overview" />
            </span>
            <Field
              type="text"
              placeholder="descripcion de la pelicula"
              name="overview"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="poster_path" />
            </span>
            <Field
              type="text"
              placeholder="url de la imagen"
              name="poster_path"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="release_date" />
            </span>
            <Field
              type="date"
              placeholder="fecha de lanzamiento"
              name="release_date"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="vote_average" />
            </span>
            <Field type="text" placeholder="puntuacion" name="vote_average" />

            <span style={{ color: "red" }}>
              <ErrorMessage name="genre" />
            </span>
            <Field type="text" placeholder="genero(s)" name="genre" />
            <button type="submit" className="add-movie-btn">
              Añadir
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddMovie;
