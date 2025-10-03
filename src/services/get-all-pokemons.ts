import { IPokemon } from "@/app/@type/IPokemon";

const getAllPokemons = async (): Promise<any> => {
  const response = await fetch("http://localhost:3000/api/pokemons", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { getAllPokemons };
