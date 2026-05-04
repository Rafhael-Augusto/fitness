type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Video = BaseEntity & {
  title: string;
  videoId: string;
  order: number;
};

export type Playlist = BaseEntity & {
  title: string;
  description: string;

  videos: Video[];
};
