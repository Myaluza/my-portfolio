import { useState, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser"

interface FormData {
    name: string
    email: string
    message: string
}

export default function Contact() {
    type Status = "idle" | "sending" | "success" | "error"
    const [status, setStatus] = useState<Status>("idle")
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit() {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        try {
            setStatus("sending")
            await emailjs.send(serviceID, templateID, { name: formData.name, email: formData.email, message: formData.message }, publicKey)
            setStatus("success")
            console.log("Message sent succesfully")
            setFormData({ name: "", email: "", message: "" })
        }
        catch (error) {
            setStatus("error")
            console.log(error)
        }
    }


    return (
        <section className="bg-navy px-6 py-16">
                <div className="max-w-md mx-auto flex flex-col gap-4">
                    <label htmlFor="name" className="font-body text-sm text-slate mb-1">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-navy/40 border border-teal/30 rounded-lg px-4 py-2 text-offwhite placeholder-slate focus:outline-none focus:border-gold"
                    />
                    <label htmlFor="email" className="font-body text-sm text-slate mb-1">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-navy/40 border border-teal/30 rounded-lg px-4 py-2 text-offwhite placeholder-slate focus:outline-none focus:border-gold"
                    />
                    <label htmlFor="message" className="font-body text-sm text-slate mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-navy/40 border border-teal/30 rounded-lg px-4 py-2 text-offwhite placeholder-slate focus:outline-none focus:border-gold"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={status === "sending"}
                        className="bg-gold text-navy font-bold px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>
                    {status === "success" && <p className="text-teal">Message sent successfully!</p>}
                    {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
                </div>
        </section>
    )
}