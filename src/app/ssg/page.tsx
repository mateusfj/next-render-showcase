import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanatio-card";
import { getPokemonsSSG } from "@/services/get-pokemons-ssg";

export default async function SSGPage() {
  const pokemons: PokemonDetails[] = await getPokemonsSSG();

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
            SSG - Static Site Generation
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-8">
            <ExplanationCard
              title="Static Site Generation (SSG)"
              description="A página é gerada uma vez durante o build e servida como HTML estático."
              howItWorks={[
                "Durante o build (npm run build)",
                "Next.js busca os dados da API",
                "Gera HTML estático com os dados",
                "HTML é armazenado e servido via CDN",
                "Todas as requisições recebem o mesmo HTML",
              ]}
              pros={[
                "Performance máxima (HTML estático)",
                "SEO perfeito",
                "Pode ser servido via CDN",
                "Custo de servidor mínimo",
                "Tempo de resposta instantâneo",
              ]}
              cons={[
                "Dados podem ficar desatualizados",
                "Build time aumenta com muitas páginas",
                "Não serve para conteúdo dinâmico",
                "Precisa rebuild para atualizar",
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
