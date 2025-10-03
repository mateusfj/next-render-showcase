import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
  id: number;
}

export function PokemonCard({ name, image, types, id }: PokemonCardProps) {
  return (
    <Card className="overflow-hidden hover:border-accent transition-colors">
      <CardContent className="p-4">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square bg-secondary rounded-lg mb-3 flex items-center justify-center">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="text-center w-full">
            <p className="text-xs text-muted-foreground mb-1">
              #{id.toString().padStart(3, "0")}
            </p>
            <h3 className="text-lg font-semibold capitalize mb-2">{name}</h3>
            <div className="flex gap-2 justify-center flex-wrap">
              {types.map((type) => (
                <Badge key={type} variant="secondary" className="capitalize">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
