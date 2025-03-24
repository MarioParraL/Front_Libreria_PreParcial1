import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import AddLibro from "../components/AddLibro.tsx";
import LibrosCollection from "../db/Libro.ts";

type Data = {
  added: boolean;
  name?: string;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const autor = url.searchParams.get("autor");
    const genre = url.searchParams.get("genre");

    if (
      name && name?.length > 0 && autor && autor?.length > 0 && genre &&
      genre?.length > 0
    ) {
      try {
        await LibrosCollection.insertOne({ name, autor, genre });
        return ctx.render({ added: true, name });
      } catch (_e) {
        return new Response("Error at adding in db", { status: 500 });
      }
    }
    return ctx.render();
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <>
      <AddLibro />
      {props.data?.added &&
        <p>El libro {props.data?.name} se ha añadido correctamente</p>}
    </>
  );
};

export default Page;
