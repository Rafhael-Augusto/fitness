"use client";

import { Button } from "@/shared/components/button";

export function SessionButton() {
  return (
    <>
      <Button className="fixed bottom-8 left-1/2 -translate-x-1/2 h-18 w-18 rounded-full border-muted-foreground border-2">
        Iniciar
      </Button>
    </>
  );
}
