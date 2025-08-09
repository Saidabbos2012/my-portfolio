'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { contactSchema, type ContactSchemaType } from "@/schemas/contactSchema"
import { styles } from "@/styles/styles"
import { useState } from "react"

function handlePhone(value: string, isDeleting: boolean): string {
    let digits = value.replace(/\D/g, "").slice(0, 9)

    if (isDeleting) {
        return value
    }

    let formatted = ""
    if (digits.length > 0) formatted += "(" + digits.slice(0, 2)
    if (digits.length >= 2) formatted += ") " + digits.slice(2, 5)
    if (digits.length >= 5) formatted += "-" + digits.slice(5, 7)
    if (digits.length >= 7) formatted += "-" + digits.slice(7, 9)

    return formatted
}

export default function HeaderForm() {
    const [isSending, setIsSending] = useState(false)

    const form = useForm<ContactSchemaType>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
            subject: "",
            message: ""
        }
    })

    async function onSubmit(values: ContactSchemaType) {
        setIsSending(true)

        const res = await fetch("/api/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })

        if (res.ok) {
            alert("Message sent successfully. ✅")
            form.reset()
        } else {
            alert("Message not sent. ❌")
        }
        setIsSending(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="lg:space-y-0 space-y-8 lg:flex justify-between">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className={`${styles.contactFormInp}`}
                                        placeholder="Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="relative h-[60px]">
                                <span className="absolute top-[50%] -translate-y-[50%] left-[20px] font-medium text-[#ededed] text-[18px]">
                                    +998
                                </span>
                                <FormControl>
                                    <Input
                                        onChange={e => {
                                            const isDeleting = e.nativeEvent.inputType === "deleteContentBackward"
                                            const formatted = handlePhone(e.target.value, isDeleting)
                                            field.onChange(formatted)
                                        }}
                                        inputMode="numeric"
                                        type="tel"
                                        value={field.value}
                                        className={`${styles.contactFormInp} pl-[80px]`}
                                        placeholder="(99) 999-99-99"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="text"
                                    className={`${styles.contactFormInp} !w-full`}
                                    placeholder="Subject"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    className={`${styles.contactFormInp} !w-full min-h-[200px] py-[20px] resize-none`}
                                    placeholder="Message..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    style={{ fontFamily: `var(--font-liber-mono)` }}
                    className={`${styles.btn} bg-transparent px-[70px] mt-5 h-[65px]`}
                    type="submit"
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}