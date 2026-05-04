import Image from "next/image";

import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";

import { Video } from "@/features/playlist/types/playlist.types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/dropdown-menu";
import { Button } from "@/shared/components/button";

type Props = {
  data: Video;
};

export function PlaylistVideo({ data }: Props) {
  const videoId = data?.videoId;

  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "/placeholder.webp";

  return (
    <div className="flex justify-between bg-muted p-2 rounded-xl">
      <div className="flex gap-2">
        <Image
          className="rounded-sm"
          src={thumbnail}
          alt="thumbnail de um video da playlist"
          height={128}
          width={128}
        />

        <span className="text-lg mt-2">{data.title}</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-xs">
              <PencilIcon size={"10"} />
              <span>Editar titulo</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-xs">
              <TrashIcon size={"10"} />
              <span>Remover video</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
