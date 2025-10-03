import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanatio-card";
import { getPokemons } from "@/services/get-all-pokemons";

export default async function SSRPage() {
  const pokemons: PokemonDetails[] = await getPokemons();

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
            SSR - Server-Side Rendering
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-8">
            <ExplanationCard
              title="Server-Side Rendering (SSR)"
              description="Os dados são buscados no servidor a cada requisição e o HTML é gerado dinamicamente."
              howItWorks={[
                "Demorou um pouco para redirecionar, né?",
                "Isso acontece porque o usuário faz uma requisição para a página",
                "Servidor busca os dados da API (PokéAPI)",
                "Servidor renderiza o HTML completo com os dados",
                "HTML pronto é enviado ao navegador",
                "Página é exibida instantaneamente (já com dados)",
              ]}
              pros={[
                "SEO excelente (conteúdo no HTML)",
                "Dados sempre atualizados",
                "Bom para conteúdo dinâmico",
                "Primeira renderização rápida",
              ]}
              cons={[
                "Latência do servidor",
                "Carga no servidor a cada requisição",
                "TTFB (Time to First Byte) maior",
                "Custo de servidor mais alto",
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {pokemons.map((pokemon: PokemonDetails) => (
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
