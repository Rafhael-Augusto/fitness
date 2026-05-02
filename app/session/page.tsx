import {
  GoalSelected,
  NotepadSheet,
  SessionButton,
  Stopwatch,
  YoutubePlayer,
} from "@/features/session/start";

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
