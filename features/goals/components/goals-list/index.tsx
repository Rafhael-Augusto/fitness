import { Goal } from "@/features/goals/types/goals.types";
import { GoalsItem } from "@/features/goals";

const goals: Goal[] = [
  {
    id: "12323123",
    title: "Meta 1",
    description: "Descricao da meta",
    tasks: [
      {
        id: "12331223",
        label: "agachamentos",
        value: 30,
        createdAt: "123321",
        updatedAt: "123321213",
      },
    ],
    createdAt: "123321",
    updatedAt: "123321213",
  },
];

export function GoalsList() {
  return (
    <>
      <h1 className="text-center p-4 text-xl font-bold">Metas criadas .</h1>
      <p className="text-center px-4 mb-4 text-muted-foreground text-xs">
        Voce pode criar novas metas ou editar metas existentes
      </p>

      {goals.map((goal) => (
        <GoalsItem data={goal} key={goal.id} />
      ))}
    </>
  );
}
