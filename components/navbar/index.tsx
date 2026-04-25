import Link from "next/link";

import { DumbbellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <button>
        <Link href={"/"} className="flex items-center gap-2">
          <DumbbellIcon size={"25"} />
          <span className="text-xl font-bold hidden md:inline">Fitness</span>
        </Link>
      </button>

      <div>
        <Button>Comece Agora</Button>
      </div>
    </nav>
  );
}
