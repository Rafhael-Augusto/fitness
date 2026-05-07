import { Goal } from "@/features/goals/types/goals.types";

import { Textarea } from "@/shared/components/textarea";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/accordion";
import {
  FieldSet,
  FieldGroup,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/shared/components/field";

type Props = {
  data: Goal;
};

export function GoalsItem({ data }: Props) {
  return (
    <Accordion type="multiple" className="p-2">
      <AccordionItem value="saved-playlists" className="border rounded-xl">
        <AccordionTrigger className="mx-2">{data.title}</AccordionTrigger>

        <AccordionContent>
          <FieldSet>
            <FieldGroup className="px-4">
              <Field>
                <FieldLabel htmlFor="title">Titulo</FieldLabel>
                <Input
                  disabled
                  id="title"
                  autoComplete="off"
                  placeholder={data.title}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Descricao</FieldLabel>
                <Textarea
                  disabled
                  id="description"
                  placeholder={data.description}
                />
              </Field>
            </FieldGroup>

            <FieldSeparator />

            <FieldGroup className="px-4">
              {data.tasks.map((item) => (
                <Field key={item.id}>
                  <FieldLabel htmlFor={item.label}>{item.label}</FieldLabel>
                  <Input
                    disabled
                    id={item.label}
                    autoComplete="off"
                    placeholder={item.value.toString()}
                  />
                </Field>
              ))}
            </FieldGroup>

            <FieldSeparator />

            <Field className="px-4">
              <Button type="button">Editar</Button>
              <Button variant={"outline"} type="button">
                Cancelar
              </Button>
            </Field>
          </FieldSet>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
