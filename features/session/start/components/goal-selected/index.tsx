"use client";

import { useState } from "react";

import { Checkbox } from "@/shared/components/checkbox";
import { Card, CardContent } from "@/shared/components/card";

type Inputs = {
  id: string;
  label: string;
  value: string | number;
};

type Props = {
  data: {
    id: string;
    title: string;
    inputs: Inputs[];
  };
};

export function GoalSelected({ data }: Props) {
  const [goalAchieved, setGoalAchieved] = useState(
    data.inputs.reduce(
      (acc, item) => {
        acc[item.id] = false;

        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const handleGoalChange = (id: string) => {
    const inputValue = goalAchieved[id];

    setGoalAchieved((prev) => ({
      ...prev,
      [id]: !inputValue,
    }));
  };

  const values = Object.values(goalAchieved);

  const total = values.length;
  const completed = values.filter(Boolean).length;

  const percentage = total ? (completed / total) * 100 : 0;

  return (
    <>
      <Card>
        <CardContent>
          <span className="text-center text-xl block mb-2">{data.title}</span>

          <Card>
            <CardContent className="flex flex-col gap-4">
              {data.inputs.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div
                    onClick={() => handleGoalChange(item.id)}
                    className="flex items-center justify-between"
                  >
                    <span className="text-lg">{item.label}</span>
                    <Checkbox
                      checked={goalAchieved[item.id]}
                      className="border-muted-foreground"
                    />
                  </div>
                  <span className="text-muted-foreground bg-muted p-2 rounded-xl">
                    {item.value}
                  </span>
                </div>
              ))}

              <div className="text-center text-lg">
                <span>{percentage}%</span>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
