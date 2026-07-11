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
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={formData.email} onChange={handleChange}/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
            {status === "sending" ? <button onClick={handleSubmit} disabled>Sending...</button> : <button onClick={handleSubmit}>Send</button>}
            {status === "success" && <p>Message sent successfully!</p>}
            {status === "error" && <p>Something went wrong. Please try again.</p>}
        </div>
    )
}