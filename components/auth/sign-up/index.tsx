"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema, FormData } from "@/components/auth/sign-up/schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

export function SignUpForm() {
  async function onSubmit(data: FormData) {
    console.log(data);
  }

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
          {/* EMAIL */}
          <Field>
            <FieldLabel htmlFor="gmail">Seu email</FieldLabel>
            <Input
              {...register("email")}
              id="gmail"
              autoComplete="off"
              placeholder="johndoe@exemplo.com"
              type="email"
            />
            <FieldDescription>Seu email cadastrado.</FieldDescription>
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          {/* PASSWORD */}
          <Field>
            <FieldLabel htmlFor="password">Sua senha</FieldLabel>
            <Input
              {...register("password")}
              id="password"
              autoComplete="off"
              placeholder="••••••••"
              type="password"
            />
            <FieldDescription>Senha da sua conta.</FieldDescription>
            {errors.password && (
              <FieldError>{errors.password.message}</FieldError>
            )}
          </Field>

          {/* CONFIRM PASSWORD */}
          <Field>
            <FieldLabel htmlFor="confirm-password">
              Confirme sua senha
            </FieldLabel>
            <Input
              {...register("confirmPassword")}
              id="confirm-password"
              autoComplete="off"
              placeholder="••••••••"
              type="password"
            />
            <FieldDescription>Confirme a senha da sua conta.</FieldDescription>
            {errors.confirmPassword && (
              <FieldError>{errors.confirmPassword.message}</FieldError>
            )}
          </Field>

          {/* SUBMIT BUTTON */}
          <Field orientation={"vertical"}>
            <Button>Criar conta</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
