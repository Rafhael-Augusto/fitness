import Link from "next/link";

import {
  CreateSession,
  EnableStopwatch,
  Notepad,
  SavedPlaylists,
  SessionGoal,
} from "@/features/session/create";

const playlists = [
  {
    id: "123123213123",
    label: "Segunda-feira",
    totalVideos: 8,
  },
  {
    id: "12321",
    label: "Terca-feira",
    totalVideos: 12,
  },
  {
    id: "3332424",
    label: "Quarta-feira",
    totalVideos: 57,
  },
];

const sessions = [
  {
    id: "123213213213",
    title: "Primeira meta legal",
    inputs: [
      {
        id: "819374t231870",
        label: "Cronometro",
        value: 200,
      },
    ],
  },
];

export default function CreateSessionPage() {
  return (
    <>
      <h1 className="text-center p-4 text-xl font-bold">Crie sua sessao.</h1>
      <p className="text-center px-4 mb-4 text-muted-foreground text-xs">
        Voce pode criar novas sessoes com dados e videos salvos, caso queira
        editar ou adicionar algo,{" "}
        <Link className="text-cyan-600 font-bold" href={"/dashboard"}>
          clique aqui
        </Link>
        .
      </p>

      <SavedPlaylists data={playlists} />

      <EnableStopwatch />

      <Notepad />

      <SessionGoal data={sessions} />

      <CreateSession />
    </>
  );
}
