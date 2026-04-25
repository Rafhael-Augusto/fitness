import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="px-4 mt-32 lg:px-16">
      <div className="min-h-[60vh]">
        <p className="text-center text-xs md:text-base lg:text-lg  text-muted-foreground mb-4">
          100% gratuito • simples • feito para consistência
        </p>

        <h1 className="text-center text-2xl md:text-5xl lg:text-8xl font-bold">
          Uma forma mais fácil de acompanhar seus treinos
        </h1>

        <p className="text-center text-muted-foreground mt-4 text-sm md:text-base lg:text-lg">
          Salve vídeos, cronometre sessões, faça anotações e acompanhe seu
          progresso em um só lugar.
        </p>

        <div className="flex justify-center mt-8">
          <Button size={"lg"}>Começar agora</Button>
        </div>

        <p className="text-center text-xs md:text-sm lg:text-base text-muted-foreground mt-4">
          Leva menos de 1 minuto para começar.
        </p>
      </div>
    </section>
  );
}
