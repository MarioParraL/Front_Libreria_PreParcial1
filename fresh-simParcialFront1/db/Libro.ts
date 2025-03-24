import { MongoClient } from "mongodb";
import { LibroDB } from "../types.ts";

const url = Deno.env.get("MONGO_URL");
if (!url) {
  throw new Error("MONGO_URL is not set");
}

const client = new MongoClient(url);
await client.connect();

const db = client.db("LibrosSimParcial1");
const LibrosCollection = db.collection<LibroDB>("libros");

export default LibrosCollection;
