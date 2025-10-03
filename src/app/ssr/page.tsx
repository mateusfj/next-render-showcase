import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { ExplanationCard } from "@/components/explanation-card";
import { getPokemons } from "@/services/get-all-pokemons";

export default async function SSRPage() {
  const pokemons: PokemonDetails[] = await getPokemons({ isSSR: true });

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
              description={
                <>
                  Observe que houve um pequeno atraso ao redirecionar para esta
                  página, mas assim que ela carregou, todos os Pokémons
                  apareceram instantaneamente! Isso é SSR em ação. 🚀
                  <br />
                  No SSR, quando você acessa a página, o servidor busca os dados
                  necessários, monta o HTML completo e só então envia tudo para
                  o seu navegador. Isso significa que você vê o conteúdo
                  prontinho para ser exibido assim que a página carrega.
                  <br />
                  👉 Dica: experimente desativar o JavaScript no navegador e
                  recarregar a página. Você verá que o conteúdo ainda aparece,
                  pois ele já vem todo montado do servidor.
                </>
              }
              howItWorks={[
                "Usuário faz uma requisição para a página",
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
              useCases={[
                "Blogs e sites de notícias",
                "Dashboards com dados em tempo real",
                "Páginas que dependem de autenticação",
                "Sites que precisam de bom SEO",
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
