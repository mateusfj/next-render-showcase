interface Pokemon {
  name: string
  url: string
}

interface PokemonDetails {
  id: number
  name: string
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
}
