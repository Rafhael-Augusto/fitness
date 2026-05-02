"use client";

import Link from "next/link";

import {
  ClipboardIcon,
  DumbbellIcon,
  LayoutDashboardIcon,
  ListVideoIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/sheet";

import { Button } from "@/shared/components/button";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/avatar";

const buttons = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    goTo: "/dashboard",
  },
  {
    label: "Sessoes",
    icon: DumbbellIcon,
    goTo: "/sessions",
  },
  {
    label: "Playlists",
    icon: ListVideoIcon,
    goTo: "/playlists",
  },
  {
    label: "Metas",
    icon: ClipboardIcon,
    goTo: "/goals",
  },
];

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Sheet open={menuOpen} onOpenChange={handleMenu}>
      <SheetTrigger onClick={handleMenu} className="fixed top-0 left-0">
        <MenuIcon className="m-2" />
      </SheetTrigger>
      <SheetContent side="left" className="p-1">
        <SheetHeader className="pb-0">
          <SheetTitle>Menu</SheetTitle>
          <p className="text-xs text-muted-foreground">
            Navegue pelo site usando este menu.
          </p>
          <SheetDescription className="sr-only">
            Navegue pelo site usando este menu.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col justify-between h-full pb-4">
          <div className="flex flex-col gap-4 pt-8">
            {buttons.map((item, index) => (
              <Link onClick={handleMenu} key={index} href={item.goTo}>
                <div className="flex items-center gap-8 bg-primary text-secondary text-xs p-1 rounded-md">
                  <div onClick={handleMenu} className="flex items-center gap-8">
                    <item.icon size={20} />
                  </div>

                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-muted p-2 rounded-lg">
            <Avatar>
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-xs">
              <span>Nome de usuario</span>
              <span className="text-muted-foreground">usuario@gmail.com</span>
            </div>

            <Button className="ml-auto" variant={"outline"}>
              <LogOutIcon />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
