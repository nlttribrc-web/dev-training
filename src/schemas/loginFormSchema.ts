import { z } from "zod";

export const loginFormSchema = z.object({
    mail: z.email({ error: 'Please enter email' }),
    password: z.string().min(1, { error: 'Please enter password' }),
})

export type LoginForm = z.infer<typeof loginFormSchema>;