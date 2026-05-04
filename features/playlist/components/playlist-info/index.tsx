"use client";

import { useState } from "react";
import { LayersIcon } from "lucide-react";

import { PlaylistVideo } from "@/features/playlist";
import { Playlist } from "@/features/playlist/types/playlist.types";

import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/field";

const playlist: Playlist = {
  id: "123",
  title: "titulo maneiro do video primeiro",
  description: "descricao maneira legal",
  createdAt: "",
  updatedAt: "",
  videos: [
    {
      id: "123321",
      title: "Titulo do video",
      videoId: "Us4e-nhESzc",
      order: 0,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "1231223321",
      title: "Titulo do 2",
      videoId: "B9X59oNGVRA",
      order: 0,
      createdAt: "",
      updatedAt: "",
    },
  ],
};

export function PlaylistInfo() {
  const [inputs, setInputs] = useState({
    title: playlist.title,
    description: playlist.description,
  });

  const handleChange = (val: string, input: "title" | "description") => {
    setInputs((prev) => ({
      ...prev,
      [input]: val,
    }));
  };

  return (
    <div>
      <FieldSet className="p-4 mt-16">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Titulo</FieldLabel>
            <Input
              disabled
              onChange={(e) => handleChange(e.target.value, "title")}
              value={inputs.title}
              id="title"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="description">Descricao</FieldLabel>
            <Input
              disabled
              onChange={(e) => handleChange(e.target.value, "description")}
              value={inputs.description}
              id="description"
            />
          </Field>

          <Field orientation={"horizontal"}>
            <Button type="button">Editar</Button>
            <Button variant={"outline"}>Cancelar</Button>
          </Field>
        </FieldGroup>
      </FieldSet>

      <div>
        <div className="flex items-center gap-4 ml-4 mt-8">
          <LayersIcon />
          <h2 className="text-2xl underline ">Video salvos</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4">
          {playlist.videos.map((item) => (
            <PlaylistVideo key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
