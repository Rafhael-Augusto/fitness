import z from "zod";

export const formSchema = z
  .object({
    email: z.email("Email Invalido"),
    password: z.string().min(8, "Minimo de 8 caracteres"),
    confirmPassword: z.string().min(8, "Minimo de 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof formSchema>;
