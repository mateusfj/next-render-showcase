import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <Button variant="outline" size="lg">
        Hello World
      </Button>
      <p className="text-sm text-muted-foreground">
        This is a simple example of a button using the Button component.
      </p>
    </div>
  );
}
