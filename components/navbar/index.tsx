import { DumbbellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <DumbbellIcon size={"25"} />
          <span className="text-xl font-bold hidden md:inline">Fitness</span>
        </div>
      </Link>

      <div>
        <Button>Comece Agora</Button>
      </div>
    </nav>
  );
}
