import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="px-4 mt-8">
      <div className="h-screen">
        <p className="text-center text-sm text-muted-foreground mb-4">
          100% gratuito • simples • feito para consistência
        </p>

        <h1 className="text-center text-3xl font-bold">
          Uma forma mais fácil de acompanhar seus treinos
        </h1>

        <p className="text-center text-muted-foreground mt-4 text-sm">
          Salve vídeos, cronometre sessões, faça anotações e acompanhe seu
          progresso em um só lugar.
        </p>

        <div className="flex justify-center mt-8">
          <Button>Começar agora</Button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Leva menos de 1 minuto para começar.
        </p>
      </div>
    </section>
  );
}
