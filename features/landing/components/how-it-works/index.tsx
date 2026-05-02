import Link from "next/link";

import { Button } from "@/shared/components/button";

import { StepItemCard } from "@/features/landing";

const steps = [
  {
    title: "Crie sua conta",
    description:
      "Comece criando sua conta. É grátis e não precisa de verificação.",
    imgUrl: "/placeholder.webp",
  },
  {
    title: "Configure sua sessão",
    description:
      "Adicione links de vídeos, faça anotações e prepare tudo antes de começar.",
    imgUrl: "/placeholder.webp",
  },
  {
    title: "Defina uma meta",
    description: "Se quiser, defina um objetivo simples para sua sessão atual.",
    imgUrl: "/placeholder.webp",
  },
  {
    title: "Inicie seu treino",
    description:
      "Quando estiver tudo pronto, clique em iniciar sessão e comece seu treino.",
    imgUrl: "/placeholder.webp",
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
        <Button size={"lg"} asChild>
          <Link href={"/auth/sign-in"}>Organize seus treinos hoje</Link>
        </Button>
      </div>
    </section>
  );
}
