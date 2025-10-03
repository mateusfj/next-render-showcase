interface getPokemonsProps {
  isSSR: boolean;
}

async function getPokemons({
  isSSR,
}: getPokemonsProps): Promise<PokemonDetails[]> {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const urlFilter = isSSR ? `?limit=12&offset=${num1}` : "?limit=12";

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon${urlFilter}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const detailRes = await fetch(pokemon.url, { cache: "no-store" });
      return detailRes.json();
    })
  );
  return pokemonDetails;
}

export { getPokemons };
