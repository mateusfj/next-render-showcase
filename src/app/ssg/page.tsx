import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanation-card";
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
              description={
                <>
                  Percebeu que a página carregou instantaneamente, sem nenhum
                  atraso? Isso é SSG (Static Site Generation) em ação! 🚀
                  <br />
                  No SSG, as páginas são pré-geradas durante o processo de build
                  do site. Isso significa que o HTML já vem prontinho para ser
                  exibido assim que você acessa a página, garantindo uma
                  performance incrível.
                  <br />
                  👉 Dica: experimente desativar o JavaScript no navegador e
                  recarregar a página. Você verá que o conteúdo ainda aparece,
                  pois ele já vem todo montado !
                </>
              }
              howItWorks={[
                "Página gerada durante o build",
                "Next.js busca os dados da API",
                "Gera HTML estático com os dados",
                "HTML é armazenado",
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
              useCases={[
                "Blogs e sites institucionais",
                "Portfólios",
                "Documentação",
                "Landing pages",
                "Sites com pouco conteúdo dinâmico",
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
