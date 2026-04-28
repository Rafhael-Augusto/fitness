"use client";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  data: {
    id: string;
    label: string;
    totalVideos: number;
  }[];
};

export function SavedPlaylists({ data }: Props) {
  const [selectedRadioId, setSelectedRadioId] = useState("no-playlist");

  return (
    <>
      <Accordion type="multiple" className="p-2">
        <AccordionItem value="saved-playlists" className="border rounded-xl">
          <AccordionTrigger className="mx-2">Playlists salvas</AccordionTrigger>

          <AccordionContent className=" text-muted-foreground">
            <RadioGroup
              value={selectedRadioId}
              onValueChange={(val) => setSelectedRadioId(val)}
              defaultValue="no-playlist"
            >
              {data.map((item) => (
                <div key={item.id} className="flex items-center gap-3 ml-8">
                  <RadioGroupItem value={item.label} id={item.label} />
                  <Label htmlFor={item.label}>{item.label}</Label> -
                  <p className="text-xs">{item.totalVideos} videos.</p>
                </div>
              ))}

              <Separator className="w-full" />

              <div className="flex items-center gap-3 ml-8">
                <RadioGroupItem value={"no-playlist"} id={"no-playlist"} />
                <Label htmlFor={"no-playlist"}>Sem playlist</Label> -
                <p className="text-xs">Sessao sem videos.</p>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
