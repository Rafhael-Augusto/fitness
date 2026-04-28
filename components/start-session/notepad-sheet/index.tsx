"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";

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
