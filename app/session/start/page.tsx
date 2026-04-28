import { NotepadSheet } from "@/components/notepad-sheet";
import { SessionButton } from "@/components/session-button";
import { Stopwatch } from "@/components/stopwatch";
import { YoutubePlayer } from "@/components/youtube-player";

export default function StartSessionPage() {
  return (
    <>
      <YoutubePlayer />

      <SessionButton />

      <NotepadSheet />

      <Stopwatch />
    </>
  );
}
