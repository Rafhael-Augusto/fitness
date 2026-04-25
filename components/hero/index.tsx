import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="h-screen pt-24">
      <div>
        <h1 className="text-center text-3xl ">
          Uma forma mais fácil de acompanhar seus treinos
        </h1>

        <p className="text-center text-muted-foreground mt-4 text-sm px-2">
          Salve vídeos, cronometre suas sessões, faça anotações no bloco de
          notas e muito mais — tudo de graça.
        </p>

        <div className="flex justify-center mt-8">
          <Button className="">Começar agora</Button>
        </div>
      </div>
    </section>
  );
}
