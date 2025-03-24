import { FunctionComponent } from "preact/src/index.d.ts";

const Header: FunctionComponent = () => {
  return (
    <div class="Header">
      <div>
        <a href={"/add"}>Añadir Libro</a>
      </div>
      <div>
        <a href={"/list"}>Listar Libros</a>
      </div>
    </div>
  );
};

export default Header;
