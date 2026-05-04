import { PlaylistInfo } from "@/features/playlist";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PlaylistInfoPage({ params }: Props) {
  const id = await params;

  return (
    <div>
      <PlaylistInfo />
    </div>
  );
}
