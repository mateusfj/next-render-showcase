import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ExplanationCard } from "@/components/explanatio-card";
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
            title="Incremental Static Regeneration (ISR)"
            description="Combina o melhor de SSG e SSR: páginas estáticas que se atualizam automaticamente."
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
