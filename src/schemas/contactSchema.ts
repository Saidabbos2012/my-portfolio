import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(3, "Enter your name!"),
    phoneNumber: z.string().regex(
        /^\((33|88|90|91|93|94|95|97|98|99)\) \d{3}-\d{2}-\d{2}$/,
        "Phone number entered incorrectly"
    ),
    subject: z.string().min(5, "Enter a subject!"),
    message: z.string().min(5, "The message must be at least 5 words!"),
})

export type ContactSchemaType = z.infer<typeof contactSchema>