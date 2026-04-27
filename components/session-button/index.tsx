"use client";

import { Button } from "@/components/ui/button";

export function SessionButton() {
  return (
    <>
      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 h-18 w-18 rounded-full border-muted-foreground border-2">
        Iniciar
      </Button>
    </>
  );
}
