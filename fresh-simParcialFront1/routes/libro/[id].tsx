import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ObjectId } from "mongodb";
import LibrosCollection from "../../db/Libro.ts";
import { Libro } from "../../types.ts";

type Data = {
  libro: Libro;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const id = ctx.params.id;
    try {
      const libroDB = await LibrosCollection.findOne({ _id: new ObjectId(id) });
      if (!libroDB) {
        return new Response("Libro no encontrado", { status: 404 });
      }

      return ctx.render({
        libro: {
          id: libroDB._id.toString(),
          name: libroDB.name,
          autor: libroDB.autor,
          genre: libroDB.genre,
        },
      });
    } catch (_e) {
      return new Response("DB Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const libro = props.data.libro;
  return (
    <div class="LibroSolo">
      <h1>{libro.name}</h1>
      <p>Escrito por: {libro.autor}</p>
      <p>Género: {libro.genre}</p>
    </div>
  );
};

export default Page;
