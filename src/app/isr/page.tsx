import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanatio-card";
import { getPokemonsISR } from "@/services/get-pokemons-isr";

export default async function ISRPage() {
  const pokemons: PokemonDetails[] = await getPokemonsISR();

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
            ISR - Incremental Static Regeneration
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-8">
            <ExplanationCard
              title="Incremental Static Regeneration (ISR)"
              description="Combina o melhor de SSG e SSR: páginas estáticas que se atualizam automaticamente."
              howItWorks={[
                "Página é gerada estaticamente no build",
                "Servida como HTML estático (rápido)",
                "Após o tempo de revalidação (ex: 60s)",
                "Próxima requisição dispara regeneração em background",
                "Nova versão estática é gerada e servida",
              ]}
              pros={[
                "Performance de SSG",
                "Dados atualizados automaticamente",
                "Melhor dos dois mundos",
                "Escalável e eficiente",
                "SEO excelente",
              ]}
              cons={[
                "Dados podem estar levemente desatualizados",
                "Complexidade adicional",
                "Primeira requisição após revalidação é mais lenta",
                "Requer configuração de tempo",
              ]}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other["official-artwork"].front_default}
                types={pokemon.types.map((t) => t.type.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
