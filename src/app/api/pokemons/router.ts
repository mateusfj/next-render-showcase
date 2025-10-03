const getAllPokemons = () => {
  ///retornar um json com os 10 primeiros pokemons

  const pokemons = {
    data: [
      {
        id: 1,
        name: "bulbasaur",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
          },
        },
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
      {
        id: 2,
        name: "ivysaur",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            },
          },
        },
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
      {
        id: 3,
        name: "venusaur",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            },
          },
        },
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
      {
        id: 4,
        name: "charmander",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
          },
        },
        types: [{ type: { name: "fire" } }],
      },
      {
        id: 5,
        name: "charmeleon",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            },
          },
        },
        types: [{ type: { name: "fire" } }],
      },
      {
        id: 6,
        name: "charizard",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            },
          },
        },
        types: [{ type: { name: "fire" } }, { type: { name: "flying" } }],
      },
      {
        id: 7,
        name: "squirtle",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            },
          },
        },
        types: [{ type: { name: "water" } }],
      },
      {
        id: 8,
        name: "wartortle",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            },
          },
        },
        types: [{ type: { name: "water" } }],
      },
      {
        id: 9,
        name: "blastoise",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            },
          },
        },
        types: [{ type: { name: "water" } }],
      },
      {
        id: 10,
        name: "caterpie",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
            },
          },
        },
        types: [{ type: { name: "bug" } }],
      },
    ],
  };
  return Promise.resolve(pokemons);
};
