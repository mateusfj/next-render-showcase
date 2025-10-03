import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full justify-items-center px-4">
      <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Next.js Rendering Methods</h1>
        <p>
          Explore os diferentes métodos de renderização do Next.js usando a
          PokéAPI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">
                Static Generation (SSG)
              </h2>
              <p>
                Dados são buscados em tempo de build. Ideal para conteúdo que
                não muda frequentemente.
              </p>
              <Button variant="default" className="mt-4">
                Ver Exemplo
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">
                Server-Side Rendering (SSR)
              </h2>
              <p>
                Dados são buscados a cada requisição. Útil para conteúdo que
                muda frequentemente.
              </p>
              <Button variant="default" className="mt-4">
                Ver Exemplo
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">
                Client-Side Rendering (CSR)
              </h2>
              <p>
                Dados são buscados no lado do cliente após o carregamento
                inicial. Bom para interatividade.
              </p>
              <Button variant="default" className="mt-4">
                Ver Exemplo
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">
                Incremental Static Regeneration (ISR)
              </h2>
              <p>
                Combina SSG com atualizações periódicas. Permite conteúdo
                estático atualizado.
              </p>
              <Button variant="default" className="mt-4">
                Ver Exemplo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
