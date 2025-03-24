import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ListLibros from "../components/ListLibros.tsx";
import LibrosCollection from "../db/Libro.ts";
import { Libro } from "../types.ts";

type Data = {
  libros: Libro[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const librosDB = await LibrosCollection.find().toArray();
    const libros = librosDB.map((l) => ({
      id: l._id.toString(),
      name: l.name,
      autor: l.autor,
      genre: l.genre,
    }));
    return ctx.render({ libros });
  },
};

const Page = (props: PageProps<Data>) => (
  <>
    <ListLibros libros={props.data?.libros} />
  </>
);

export default Page;
