import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code, Lightbulb } from "lucide-react";

interface ExplanationCardProps {
  description: React.ReactNode;
  howItWorks: string[];
  pros: string[];
  cons: string[];
  useCases?: string[];
}

export function ExplanationCard({
  description,
  howItWorks,
  pros,
  cons,
  useCases,
}: ExplanationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="space-y-1 text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Como funciona:
          </h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {howItWorks.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Alert className="bg-green-500/10 border-green-500/50">
          <AlertDescription>
            <p className="font-semibold text-green-400 mb-2">✓ Vantagens:</p>
            <ul className="space-y-1 text-sm">
              {pros.map((pro, index) => (
                <li key={index}>• {pro}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>

        <Alert className="bg-red-500/10 border-red-500/50">
          <AlertDescription>
            <p className="font-semibold text-red-400 mb-2">✗ Desvantagens:</p>
            <ul className="space-y-1 text-sm">
              {cons.map((con, index) => (
                <li key={index}>• {con}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>

        {useCases && useCases.length > 0 && (
          <Alert className="bg-blue-500/10 border-blue-500/50">
            <AlertDescription>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-blue-400" />
                <p className="font-semibold text-blue-400">Quando usar:</p>
              </div>
              <ul className="space-y-1 text-sm">
                {useCases.map((useCase, index) => (
                  <li key={index}>• {useCase}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
