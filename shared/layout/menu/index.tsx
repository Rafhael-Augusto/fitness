import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/sheet";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-0 right-0">
        <MenuIcon className="m-2" />
      </SheetTrigger>
      <SheetContent className="p-1">
        <SheetHeader className="pb-0">
          <SheetTitle>Menu</SheetTitle>
          <p className="text-xs text-muted-foreground">
            Navegue pelo site usando este menu.
          </p>
          <SheetDescription className="sr-only">
            Navegue pelo site usando este menu.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
