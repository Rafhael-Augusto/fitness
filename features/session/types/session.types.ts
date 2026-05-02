type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

type Video = BaseEntity & {
  title: string;
  videoId: string;
  order: number;
};

export type Goal = BaseEntity & {
  label: string;
  value: string | number;
};

export type Playlist = BaseEntity & {
  title: string;

  videos: Video[];
};

export type Session = BaseEntity & {
  title: string;
  description: string;

  playlist: Playlist;
  goals: Goal[];

  status: "started" | "finished";
};
