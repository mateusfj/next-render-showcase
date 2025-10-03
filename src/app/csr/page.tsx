"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanation-card";
import { getPokemons } from "@/services/get-all-pokemons";
import { Input } from "@/components/ui/input";

export default function CSRPage() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonDetails = await getPokemons({ isSSR: false });
      setLoading(false);
      setPokemons(pokemonDetails);
    }
    fetchPokemons();
  }, []);

  const filteredPokemons = useMemo(() => {
    if (!searchTerm) return pokemons;
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pokemons, searchTerm]);

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
              description={
                <>
                  Percebeu que o redirecionamento foi instantâneo, mas a lista
                  de Pokémons demorou um pouco para aparecer?
                  <br />
                  Isso acontece porque estamos usando CSR (Client-Side
                  Rendering)! 🚀
                  <br />
                  No CSR, o servidor envia apenas o HTML básico (quase vazio).
                  Depois, o JavaScript entra em ação: ele baixa os dados, monta
                  a página no navegador e só então exibe o conteúdo.
                  <br />
                  👉 Dica: experimente desativar o JavaScript no navegador e
                  recarregar a página. Você vai ver que nada aparece — afinal,
                  todo o conteúdo depende do JS.
                </>
              }
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
              useCases={[
                "Aplicações com muita interatividade",
                "Dashboards e ferramentas internas",
                "Apps que não precisam de SEO",
                "SPAs (Single Page Applications)",
              ]}
            />
          </div>
          <div>
            <div className="mb-4 flex">
              <Input
                placeholder="Exemplo: charmander"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {loading && (
                <p className="text-center col-span-2">Carregando...</p>
              )}
              {!loading && filteredPokemons.length === 0 && (
                <p className="text-center col-span-2">
                  Nenhum pokemon encontrado
                </p>
              )}
              {filteredPokemons.map((pokemon) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
