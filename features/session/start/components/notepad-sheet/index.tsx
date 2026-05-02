"use client";

import { useState } from "react";

import { ArrowLeftIcon } from "lucide-react";

import { Textarea } from "@/shared/components/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/sheet";

export function NotepadSheet() {
  const [content, setContent] = useState("");

  return (
    <Sheet>
      <SheetTrigger className="fixed top-1/2 -translate-y-1/2 right-0">
        <ArrowLeftIcon />
      </SheetTrigger>
      <SheetContent className="p-1">
        <SheetHeader className="pb-0">
          <SheetTitle>Bloco de notas</SheetTitle>
          <p className="text-xs text-muted-foreground">Salva automaticamente</p>
          <SheetDescription className="sr-only">
            Bloco de notas
          </SheetDescription>
        </SheetHeader>

        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-sm h-full w-full border-2"
        />
      </SheetContent>
    </Sheet>
  );
}
