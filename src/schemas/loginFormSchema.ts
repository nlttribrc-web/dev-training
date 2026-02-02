import { z } from "zod";

export const loginFormSchema = z.object({
    mail: z.string().min(1, { message: "Please enter email" }).email("Invalid email format."),
    password: z.string().min(1, { error: 'Please enter password' }),
})

export type LoginForm = z.infer<typeof loginFormSchema>;