import { GoalSelected } from "@/components/start-session/goal-selected";
import { NotepadSheet } from "@/components/start-session/notepad-sheet";
import { SessionButton } from "@/components/start-session/session-button";
import { Stopwatch } from "@/components/start-session/stopwatch";
import { YoutubePlayer } from "@/components/start-session/youtube-player";

export default function StartSessionPage() {
  return (
    <>
      <YoutubePlayer />

      <SessionButton />

      <NotepadSheet />

      <GoalSelected />

      <Stopwatch />
    </>
  );
}
