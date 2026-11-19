"use client";

import { toast } from "@/components/ui/toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Loader2, Mail, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setStatus("success");
      toast.add({
        type: "success",
        description: "Thanks for reaching out! Your message has been sent.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      if (err instanceof EmailJSResponseStatus) {
        toast.add({
          type: "error",
          description: `Could not send message (${err.text}). Please try again.`,
        });
      } else {
        toast.add({
          type: "error",
          description: "Something went wrong. Please try again later.",
        });
      }
    }
  }
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between gap-10 container max-w-5xl mx-auto p-10 md:p-20 font-jakarta duration-300">
      <div className="flex flex-col justify-between w-full md:w-80 ">
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-semibold"
          >
            Get in Touch
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            I&apos;d like to hear from you!
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="text-xs text-gray-600"
          >
            If you have any inquiries or just want to say hi, <br />
            please use the contact form!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="space-y-5 my-20"
        >
          <div className="flex items-center justify-between">
            <Mail />
            <p>nnnnnmaung@gmail.com</p>
          </div>
          <div className="flex items-center justify-between">
            <ThumbsUp />
            <div className="flex items-center gap-3 ">
              <a
                href="https://www.linkedin.com/in/nyein-maung-995926442/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <form onSubmit={handleSubmit} className="p-5 w-96 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <label htmlFor="name" className="text-sm text-gray-500">
            Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border block w-full h-10 p-3"
            id="name"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <label htmlFor="email" className="text-sm text-gray-500">
            Email
          </label>
          <input
            type="email"
            className="border block w-full h-10 p-3"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <label htmlFor="message" className="text-sm text-gray-500">
            Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            id="message"
            className="border block w-full h-24 px-3 py-1"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          disabled={status === "submitting"}
          className="py-2 px-5 cursor-pointer mt-3 bg-zinc-950 hover:bg-zinc-800 duration-500 text-white ml-auto"
        >
          {status === "submitting" ? (
            <div className="flex items-center gap-3">
              Sending <Loader2 className="animate-spin" />
            </div>
          ) : (
            "Send"
          )}
        </motion.button>
      </form>
    </div>
  );
}
