import { Button } from "@/components/ui/button";

import { StepItemCard } from "@/components/step-item-card";

const steps = [
  {
    title: "Crie sua conta",
    description:
      "Comece criando sua conta. É grátis e não precisa de verificação.",
    imgUrl: "/next.svg",
  },
  {
    title: "Configure sua sessão",
    description:
      "Adicione links de vídeos, faça anotações e prepare tudo antes de começar.",
    imgUrl: "/next.svg",
  },
  {
    title: "Defina uma meta",
    description: "Se quiser, defina um objetivo simples para sua sessão atual.",
    imgUrl: "/next.svg",
  },
  {
    title: "Inicie seu treino",
    description:
      "Quando estiver tudo pronto, clique em iniciar sessão e comece seu treino.",
    imgUrl: "/next.svg",
  },
];

export function HowItWorks() {
  return (
    <section>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl my-4">
        Como começar seu primeiro treino
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-16">
        {steps.map((step, index) => (
          <StepItemCard data={step} key={index} />
        ))}
      </div>

      <div className="flex justify-center mb-16 mt-16">
        <Button size={"lg"}>Organize seus treinos hoje</Button>
      </div>
    </section>
  );
}
