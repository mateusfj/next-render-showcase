async function getPokemonsISR() {
  const num1 = Math.floor(Math.random() * 90) + 1;
  const num2 = num1 + 10;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${num2}&offset=${num1}`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const detailRes = await fetch(pokemon.url, { next: { revalidate: 60 } });
      return detailRes.json();
    })
  );

  return pokemonDetails;
}

export { getPokemonsISR };
