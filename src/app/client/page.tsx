"use client";

import { useEffect, useState } from "react";
import { IPokemon } from "../@type/IPokemon";

const Page = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Renderização do lado do cliente (CSR)</h1>
      {pokemons.length === 0 && <p>hydratando...</p>}
      {pokemons.map((pokemon: IPokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default Page;
