import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code, Info } from "lucide-react";

interface ExplanationCardProps {
  title: string;
  description: string;
  howItWorks: string[];
  pros: string[];
  cons: string[];
}

export function ExplanationCard({
  howItWorks,
  pros,
  cons,
}: ExplanationCardProps) {
  return (
    <Card>
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
        <div className="grid md:grid-cols-2 gap-4">
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
        </div>
      </CardContent>
    </Card>
  );
}
