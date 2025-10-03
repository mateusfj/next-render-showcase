import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ExplanationCard } from "@/components/explanation-card";
import { getBitcoinPrice } from "@/services/get-bitcoin-isr";
import { Card, CardContent } from "@/components/ui/card";

export default async function ISRPage() {
  const bitcoinData = await getBitcoinPrice();

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
          <ExplanationCard
            description={
              <>
                Veja como a página carregou quase instantaneamente, mas se você
                esperar alguns segundos e recarregar, verá que o preço do
                Bitcoin foi atualizado automaticamente! Isso é ISR (Incremental
                Static Regeneration) em ação! 🚀
                <br />
                No ISR, a página é gerada estaticamente durante o build, mas com
                um toque especial: ela pode ser atualizada em segundo plano após
                um certo tempo (definido por você). Isso significa que você
                obtém a performance do SSG, mas com dados que podem ser
                atualizados regularmente.
                <br />
                👉 Dica: experimente desativar o JavaScript no navegador e
                recarregar a página. Você verá que o conteúdo ainda aparece,
                pois ele já vem todo montado!
              </>
            }
            howItWorks={[
              "Aqui foi quase que instantâneo para carregar, né?",
              "Isso acontece porque a página é gerada estaticamente no build",
              "Servida como HTML estático (rápido)",
              "Após o tempo de revalidação (ex: 60s)",
              "Próxima requisição dispara regeneração em background",
              "Nova versão estática é gerada e servida",
              "Recarregue a página após 10 segundos para ver a atualização",
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
            useCases={[
              "Dashboards com dados que mudam frequentemente",
              "Páginas de produtos com preços atualizados",
              "Blogs com comentários recentes",
              "Sites que precisam de bom SEO e dados atualizados",
            ]}
          />
          <Card>
            <CardContent className="text-center h-full justify-center flex flex-col ">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-full mb-4">
                  <span className="text-4xl">₿</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Bitcoin
                </h2>
                <p className="text-sm text-muted-foreground">BTC</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-foreground mb-2">
                  $
                  {bitcoinData.last.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
