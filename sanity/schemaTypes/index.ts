import { type SchemaTypeDefinition } from "sanity";
import Books from "./schemas/books.schema";
import Playlists from "./schemas/playlist.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Books, Playlists],
};
