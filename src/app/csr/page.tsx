"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanatio-card";
import { getPokemons } from "@/services/get-all-pokemons";

export default function CSRPage() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonDetails = await getPokemons();
      setPokemons(pokemonDetails);
      setLoading(false);
    }
    fetchPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-accent mb-4" />
                <p className="text-muted-foreground">carregado...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
}
