async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12", {
    cache: "no-store",
  })
  const data = await res.json()
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const detailRes = await fetch(pokemon.url, { cache: "no-store" })
      return detailRes.json()
    }),
  )
  return pokemonDetails
}

export { getPokemons }