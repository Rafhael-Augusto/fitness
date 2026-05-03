import { Playlist } from "@/features/playlist/types/playlist.types";

type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Goal = BaseEntity & {
  label: string;
  value: string | number;
};

export type Session = BaseEntity & {
  title: string;
  description: string;

  playlist: Playlist;
  goals: Goal[];

  status: "started" | "finished";
};
