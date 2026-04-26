"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { formSchema, FormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignInForm() {
  async function onSubmit(data: FormData) {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="gmail">Seu email</FieldLabel>
            <Input
              {...register("email")}
              id="gmail"
              autoComplete="off"
              placeholder="johndoe@exemplo.com"
              type="email"
            />
            <FieldDescription>Seu email.</FieldDescription>
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Sua senha</FieldLabel>
            <Input
              {...register("password")}
              id="password"
              autoComplete="off"
              placeholder="••••••"
              type="password"
            />
            <FieldDescription>
              Senha utilizada no seu cadastro.
            </FieldDescription>
            {errors.password && (
              <FieldError>{errors.password.message}</FieldError>
            )}
          </Field>
          <Field orientation={"vertical"}>
            <Button>Fazer login</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
