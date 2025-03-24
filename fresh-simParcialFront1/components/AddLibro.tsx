import { FunctionComponent } from "preact/src/index.d.ts";

const AddLibro: FunctionComponent = () => {
  return (
    <div>
      <form method="GET" action="/add" class="AddForm">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="autor" placeholder="Autor" />
        <input type="text" name="genre" placeholder="Genre" />
        <button type="submit">Añadir Libro</button>
      </form>
    </div>
  );
};

export default AddLibro;
