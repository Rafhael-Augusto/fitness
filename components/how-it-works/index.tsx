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
      <h2 className="text-center text-2xl my-4">
        Como comecar seu primeiro treino
      </h2>

      <div className="grid grid-cols-1 gap-8 px-16">
        {steps.map((step, index) => (
          <StepItemCard data={step} key={index} />
        ))}
      </div>

      <Button>Organize seus treinos hoje</Button>
    </section>
  );
}
