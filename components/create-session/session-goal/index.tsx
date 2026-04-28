"use client";

import { useState } from "react";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

type Inputs = {
  id: string;
  label: string;
  value: number | string;
};

type Props = {
  data: {
    id: string;
    title: string;
    inputs: Inputs[];
  }[];
};

export function SessionGoal({ data }: Props) {
  const [selectedRadioId, setSelectedRadioId] = useState("new-goal");

  return (
    <div>
      <Accordion type="multiple" className="p-2 h-auto">
        <AccordionItem value="saved-playlists" className="border rounded-xl">
          <AccordionTrigger className="mx-2">Metas</AccordionTrigger>

          <AccordionContent className="text-muted-foreground h-auto">
            <RadioGroup
              onValueChange={(val) => setSelectedRadioId(val)}
              value={selectedRadioId}
              defaultValue="new-goal"
            >
              {data.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between gap-3 ml-8">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={item.id} id={item.id} />
                      <Label htmlFor={item.id}>{item.title}</Label>
                    </div>

                    <Button asChild variant={"secondary"}>
                      <Link href={`/session/${item.id}`}>
                        {" "}
                        <ExternalLinkIcon />{" "}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}

              <Separator className="w-full" />

              <div>
                <div className="flex items-center gap-3 ml-8">
                  <RadioGroupItem value={"new-goal"} id={"new-goal"} />
                  <Label htmlFor={"new-goal"}>Nova meta</Label>
                </div>

                {selectedRadioId === "new-goal" && (
                  <FieldSet className="px-2 mt-8 border m-2 rounded-xl p-2">
                    <FieldGroup>
                      <Field>
                        <div className="flex items-center justify-between">
                          <FieldLabel htmlFor="goal-name">
                            Nome da meta
                          </FieldLabel>
                          <Button size={"xs"} variant={"destructive"}>
                            remover
                          </Button>
                        </div>
                        <Input
                          id="goal-name"
                          autoComplete="off"
                          placeholder="Nome da meta"
                          defaultValue={`Meta #${data.length}`}
                        />
                      </Field>
                      <Field>
                        <div className="flex items-center justify-between">
                          <FieldLabel htmlFor="stopwatch">
                            Cronômetro (em minutos)
                          </FieldLabel>
                          <Button size={"xs"} variant={"destructive"}>
                            Remover
                          </Button>
                        </div>
                        <Input
                          id="stopwatch"
                          autoComplete="off"
                          placeholder="Tempo da meta"
                          defaultValue={"15"}
                        />
                      </Field>

                      <Field orientation={"horizontal"}>
                        <Button variant={"secondary"} type="button">
                          +
                        </Button>
                      </Field>

                      <Field orientation={"horizontal"}>
                        <Button className="mt-4">Criar nova meta</Button>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                )}
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
