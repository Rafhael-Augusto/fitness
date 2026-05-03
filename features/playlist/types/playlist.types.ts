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

export type Playlist = BaseEntity & {
  title: string;

  videos: Video[];
};
