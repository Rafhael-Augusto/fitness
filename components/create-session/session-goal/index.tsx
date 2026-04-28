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
                  <div className="flex items-center justify-between mx-8">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={item.id} id={item.id} />
                      <Label htmlFor={item.id}>{item.title}</Label>
                    </div>

                    <Button asChild variant={"secondary"} size={"icon"}>
                      <Link href={`/session/${item.id}`}>
                        <ExternalLinkIcon />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}

              <Separator className="w-full" />

              <div>
                <div className="flex items-center gap-3 ml-8">
                  <RadioGroupItem value={"new-goal"} id={"new-goal"} />
                  <Label htmlFor={"new-goal"}>Sem meta</Label> -
                  <p className="text-xs">Sessao sem meta.</p>
                </div>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
