import { OptionalId } from "mongodb";

export type Libro = {
  id: string;
  name: string;
  autor: string;
  genre: string;
};

export type LibroDB = OptionalId<{
  name: string;
  autor: string;
  genre: string;
}>;
