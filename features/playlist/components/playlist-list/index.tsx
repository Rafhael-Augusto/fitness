import { PlaylistItem } from "@/features/playlist";

import { Playlist } from "@/features/playlist/types/playlist.types";

const playlistList: Playlist[] = [
  {
    id: "123",
    title: "titulo maneiro do video primeiro",
    description: "descricao maneira legal",
    createdAt: "",
    updatedAt: "",
    videos: [
      {
        id: "123321",
        title: "Titulo do video",
        videoId: "Us4e-nhESzc",
        order: 0,
        createdAt: "",
        updatedAt: "",
      },
      {
        id: "1231223321",
        title: "Titulo do 2",
        videoId: "id do 2",
        order: 0,
        createdAt: "",
        updatedAt: "",
      },
    ],
  },
  {
    id: "123456",
    title: "titulo maneiro",
    description: "descricao maneira legal",
    createdAt: "",
    updatedAt: "",
    videos: [
      {
        id: "123321",
        title: "Titulo do video",
        videoId: "wyU_k2ft4aE",
        order: 0,
        createdAt: "",
        updatedAt: "",
      },
    ],
  },
];

export function PlaylistList() {
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl">Playlists salva</h2>

      <div className="grid grid-cols-2 mt-8">
        {playlistList.map((item) => (
          <PlaylistItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
