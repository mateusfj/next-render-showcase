"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanatio-card";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

export default function CSRPage() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [renderTime, setRenderTime] = useState("");

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: Pokemon) => {
            const detailRes = await fetch(pokemon.url);
            return detailRes.json();
          })
        );

        setPokemons(pokemonDetails);
        setRenderTime(new Date().toLocaleTimeString("pt-BR"));
      } catch (error) {
        console.error("[v0] Error fetching pokemons:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              CSR - Client-Side Rendering
            </h1>
            <p className="text-muted-foreground">
              {renderTime
                ? `Renderizado no cliente: ${renderTime}`
                : "Carregando..."}
            </p>
          </div>

          <div className="mb-8">
            <ExplanationCard
              title="Client-Side Rendering (CSR)"
              description="Os dados são buscados no navegador após a página carregar, usando JavaScript."
              howItWorks={[
                "Servidor envia HTML vazio (apenas estrutura)",
                "JavaScript é baixado e executado no navegador",
                "useEffect dispara a busca de dados da API",
                "Dados são recebidos e estado é atualizado",
                "React re-renderiza a página com os dados",
              ]}
              pros={[
                "Interatividade rica",
                "Menor carga no servidor",
                "Transições suaves entre páginas",
                "Ideal para dashboards e apps",
              ]}
              cons={[
                "SEO ruim (conteúdo não no HTML inicial)",
                "Loading state necessário",
                "Depende de JavaScript",
                "Primeira renderização mais lenta",
              ]}
            />
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-accent mb-4" />
              <p className="text-muted-foreground">Carregando Pokémons...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                  types={pokemon.types.map((t) => t.type.name)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
