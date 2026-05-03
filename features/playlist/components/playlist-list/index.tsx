import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

const playlistList = [
  {
    id: "123",
    title: "titulo maneiro do video primeiro",
    videos: [
      {
        id: "123321",
        title: "Titulo do video",
        videoId: "Us4e-nhESzc",
        order: 0,
      },
      {
        id: "1231223321",
        title: "Titulo do 2",
        videoId: "id do 2",
        order: 0,
      },
    ],
  },
  {
    id: "123",
    title: "titulo maneiro",
    videos: [
      {
        id: "123321",
        title: "Titulo do video",
        videoId: "wyU_k2ft4aE",
        order: 0,
      },
    ],
  },
];

export function PlaylistList() {
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl">Playlists salva</h2>

      <div className="grid grid-cols-2 mt-8">
        {playlistList.map((item) => {
          const videoId = item.videos[0]?.videoId;

          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "/placeholder.webp";

          return (
            <div
              key={item.id}
              className="flex justify-center hover:scale-105 transition-transform"
            >
              <Link
                href={`/playlists/${item.id}`}
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
                  className={cn(
                    "text-xs block w-32 font-bold",
                    !videoId && "mt-6",
                  )}
                >
                  {item.title}
                </span>

                <div className="absolute bottom-13 right-5 text-white text-xs bg-muted-foreground/50 p-0.5 rounded-sm">
                  {item.videos.length}{" "}
                  {item.videos.length === 1 ? "video" : "videos"}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
