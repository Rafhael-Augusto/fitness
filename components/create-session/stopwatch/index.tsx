"use client";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EnableStopwatch() {
  const [selectedRadioId, setSelectedRadioId] = useState("enable-stopwatch");

  return (
    <>
      <Accordion type="multiple" className="p-2">
        <AccordionItem value="saved-playlists" className="border rounded-xl">
          <AccordionTrigger className="mx-2">Cronômetro</AccordionTrigger>

          <AccordionContent className="ml-8 text-muted-foreground">
            <RadioGroup
              value={selectedRadioId}
              onValueChange={(val) => setSelectedRadioId(val)}
              defaultValue="enable-stopwatch"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={"enable-stopwatch"}
                  id={"enable-stopwatch"}
                />
                <Label htmlFor={"enable-stopwatch"}>Habilitar</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={"disable-stopwatch"}
                  id={"disable-stopwatch"}
                />
                <Label htmlFor={"disable-stopwatch"}>Desabilitar</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
