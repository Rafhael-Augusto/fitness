import Link from "next/link";

import { DumbbellIcon } from "lucide-react";

import { Button } from "@/shared/components/button";

export function Navbar() {
  return (
    <nav className="fixed backdrop-blur-xs bg-secondary/50 m-2 rounded-xl">
      <div className="flex items-center justify-between p-4 w-screen relative">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          aria-label="Home page button"
        >
          <DumbbellIcon size={"25"} />
          <span className="text-xl font-bold hidden md:inline">Fitness</span>
        </Link>

        <div>
          <Button asChild>
            <Link href={"/auth/sign-in"}>Comece Agora</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
