import { IPokemon } from "@/app/@type/IPokemon";

const getAllPokemons = async (): Promise<IPokemon[]> => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data.results;
};

export { getAllPokemons };
