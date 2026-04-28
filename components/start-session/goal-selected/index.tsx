import { Card, CardContent } from "@/components/ui/card";

const goalSelected = {
  id: "123213213213",
  title: "Primeira meta legal",
  inputs: [
    {
      id: "819374t231870",
      label: "Cronometro",
      value: 200,
    },
    {
      id: "819374t2231870",
      label: "Agachamentos",
      value: 200,
    },
    {
      id: "8193724t231870",
      label: "Porra",
      value: 200,
    },
    {
      id: "81937224t231870",
      label: "Porra",
      value: 200,
    },
  ],
};

export function GoalSelected() {
  return (
    <>
      <Card>
        <CardContent>
          <span className="text-center text-xl block mb-2">
            {goalSelected.title}
          </span>

          <Card>
            <CardContent className="flex flex-col gap-4">
              {goalSelected.inputs.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <span className="text-lg">{item.label}</span>
                  <span className="text-muted-foreground bg-muted p-2 rounded-xl">
                    {item.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
