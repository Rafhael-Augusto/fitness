import { CardItem } from "@/components/card-item";

const cards = [
  {
    label: "Salve links de vídeos",
    description: "Guarde links de vídeos para assistir durante seus treinos.",
  },
  {
    label: "Cronômetro integrado",
    description: "Marque o tempo de cada sessão com um cronômetro integrado.",
  },
  {
    label: "Anotações",
    description:
      "Faça anotações no bloco de notas para não esquecer nada importante.",
  },
  {
    label: "Histórico de sessões",
    description:
      "Salve suas sessões e consulte os detalhes sempre que precisar.",
  },
  {
    label: "Compartilhe suas conquistas",
    description:
      "Crie links para compartilhar seus treinos e motivar outras pessoas.",
  },
];

export function Cards() {
  return (
    <section className="mb-8">
      <h3 className="text-center text-2xl my-4">
        Temos tudo que você precisa.
      </h3>

      <div className="grid grid-cols-1 gap-8 px-16">
        {cards.map((card, index) => (
          <CardItem data={card} key={index} />
        ))}
      </div>
    </section>
  );
}
