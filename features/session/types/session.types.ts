import { Playlist } from "@/features/playlist/types/playlist.types";
import { Goal } from "@/features/goals/types/goals.types";

type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Session = BaseEntity & {
  title: string;
  description: string;

  playlist: Playlist;
  goals: Goal[];

  status: "started" | "finished";
};
