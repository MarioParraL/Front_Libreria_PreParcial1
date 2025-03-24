import { FunctionComponent } from "preact/src/index.d.ts";
import { Libro } from "../types.ts";

type Props = {
  libros: Libro[];
};

const ListLibros: FunctionComponent<Props> = (props) => {
  const libros = props.libros;
  return (
    <div>
      <h1>Libros guardados</h1>
      <div class="LibrosContainer">
        {libros.map((l) => (
          <div class="LibroCard">
            <a href={`/libro/${l.id}`}>
              {l.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListLibros;
