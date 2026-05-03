import {
  GoalSelected,
  NotepadSheet,
  SessionButton,
  Stopwatch,
  YoutubePlayer,
} from "@/features/session/start";

const goalSelected = {
  id: "123213213213",
  title: "Primeira meta legal",
  inputs: [
    {
      id: "819374t231870",
      label: "Cronometro",
      value: 200,
    },
    {
      id: "819374t2231870",
      label: "Agachamentos",
      value: 200,
    },
    {
      id: "8193724t231870",
      label: "Porra",
      value: 200,
    },
    {
      id: "81937224t231870",
      label: "Porra",
      value: 200,
    },
  ],
};

export default function StartSessionPage() {
  return (
    <>
      <YoutubePlayer />

      <SessionButton />

      <NotepadSheet />

      <GoalSelected data={goalSelected} />

      <Stopwatch />
    </>
  );
}
