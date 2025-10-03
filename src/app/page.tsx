import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  const renderingMethods = [
    {
      title: "SSR",
      description: "Server-Side Rendering",
      href: "/ssr",
      color: "text-blue-400",
      details: "Renderizado no servidor a cada requisição",
    },
    {
      title: "CSR",
      description: "Client-Side Rendering",
      href: "/csr",
      color: "text-green-400",
      details: "Renderizado no navegador do cliente",
    },
    {
      title: "SSG",
      description: "Static Site Generation",
      href: "/ssg",
      color: "text-yellow-400",
      details: "Gerado estaticamente no build",
    },
    {
      title: "ISR",
      description: "Incremental Static Regeneration",
      href: "/isr",
      color: "text-purple-400",
      details: "Regeneração estática incremental",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Next.js Rendering Methods
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Explore os diferentes métodos de renderização do Next.js usando a
              PokéAPI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderingMethods.map((method) => {
              return (
                <Link key={method.href} href={method.href}>
                  <Card className="h-full transition-all cursor-pointer shadow-none hover:shadow-lg rounded-md">
                    <CardHeader>
                      <CardTitle className="text-2xl">{method.title}</CardTitle>
                      <CardDescription className="text-base">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {method.details}
                      </p>
                      <Button>Ver Demonstração</Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Sobre este projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Esta aplicação demonstra os 4 principais métodos de renderização
                do Next.js, cada um buscando dados da PokéAPI de forma
                diferente.
              </p>
              <p>
                Para uma melhor experiência e para testar como cada método
                funciona na prática, sugiro que altere a velocidade da sua rede
                para 3G ou 4G nas DevTools do navegador. Dessa forma, você
                consegue perceber com mais clareza as diferenças de performance
                e a experiência do usuário.
              </p>
              <p>
                O código fonte está disponível no{" "}
                <a
                  href="https://github.com/mateusfj/next-render-showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  GitHub
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
