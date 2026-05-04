import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";

import { Playlist } from "@/features/playlist/types/playlist.types";

type Props = {
  data: Playlist;
};

export function PlaylistItem({ data }: Props) {
  const videoId = data.videos[0]?.videoId;

  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "/placeholder.webp";

  return (
    <div
      key={data.id}
      className="flex justify-center hover:scale-105 transition-transform"
    >
      <Link
        href={`/playlists/${data.id}`}
        className="relative bg-muted p-4 rounded-xl"
      >
        <Image
          className="rounded-sm"
          src={thumbnail}
          alt="thumbnail de um video da playlist"
          height={128}
          width={128}
        />

        <span
          className={cn("text-xs block w-32 font-bold", !videoId && "mt-6")}
        >
          {data.title}
        </span>

        <div className="absolute bottom-13 right-5 text-white text-xs bg-muted-foreground/50 p-0.5 rounded-sm">
          {data.videos.length} {data.videos.length === 1 ? "video" : "videos"}
        </div>
      </Link>
    </div>
  );
}
