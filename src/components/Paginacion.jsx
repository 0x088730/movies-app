import "../styles/paginacion.css";

export const Paginacion = (props) => {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active-page" : "no-active-page"}
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className="paginacion-componente">
      <p>
        Página {props.pagina} de {props.total}:
      </p>
      <div className="container-paginacion">{getPaginas()}</div>
    </div>
  );
};
