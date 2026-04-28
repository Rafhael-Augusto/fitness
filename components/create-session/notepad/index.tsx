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

export function Notepad() {
  const [selectedRadioId, setSelectedRadioId] = useState("enable-notepad");

  return (
    <>
      <Accordion type="multiple" className="p-2">
        <AccordionItem value="saved-playlists" className="border rounded-xl">
          <AccordionTrigger className="mx-2">Anotações</AccordionTrigger>

          <AccordionContent className="ml-8 text-muted-foreground">
            <RadioGroup
              value={selectedRadioId}
              onValueChange={(val) => setSelectedRadioId(val)}
              defaultValue="enable-notepad"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={"enable-notepad"}
                  id={"enable-notepad"}
                />
                <Label htmlFor={"enable-notepad"}>Habilitar</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={"disable-notepad"}
                  id={"disable-notepad"}
                />
                <Label htmlFor={"disable-notepad"}>Desabilitar</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
