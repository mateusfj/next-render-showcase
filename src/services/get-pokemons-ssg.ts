async function getPokemonsSSG(): Promise<PokemonDetails[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12", {
    cache: "force-cache", // Força SSG - cache permanente
  });
  const data = await res.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const detailRes = await fetch(pokemon.url, { cache: "force-cache" });
      return detailRes.json();
    })
  );

  return pokemonDetails;
}

export { getPokemonsSSG };
