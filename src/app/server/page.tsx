import { getAllPokemons } from "@/services/get-all-pokemons";
import { IPokemon } from "../@type/IPokemon";

const Page = async () => {
  const pokemons: IPokemon[] = await getAllPokemons();
  return (
    <div>
      <h1>Renderização do lado do servidor (SSR)</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default Page;
