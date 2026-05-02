"use client";

import { useState } from "react";

import Link from "next/link";

import { ExternalLinkIcon } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/shared/components/radio-group";
import { Separator } from "@/shared/components/separator";
import { Button } from "@/shared/components/button";
import { Label } from "@/shared/components/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/accordion";

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
                <div
                  key={item.id}
                  className="flex items-center justify-between mx-8"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={item.label} id={item.label} />
                    <Label htmlFor={item.label}>{item.label}</Label> -
                    <p className="text-xs">{item.totalVideos} videos.</p>
                  </div>
                  <Button asChild variant={"secondary"} size={"icon"}>
                    <Link href={`/playlist/${item.id}`}>
                      <ExternalLinkIcon />
                    </Link>
                  </Button>
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
