"use client";

import { useState } from "react";
import Icon from "./Icon";

const FORMSPREE_URL = "https://formspree.io/f/xvkaodqq";

const inputClass =
  "mt-1.5 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-neutral-400 transition focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none";
const labelClass = "text-sm font-medium text-ink";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-200 bg-accent-50 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white">
          <Icon name="check" />
        </div>
        <p className="mt-4 text-lg font-bold text-ink">¡Gracias por escribirnos!</p>
        <p className="mt-1 text-sm font-light text-neutral-600">Te responderemos a la brevedad.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_URL}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
    >
      <input type="hidden" name="_subject" value="Nueva consulta desde duckit.com.ar" />
      <label className={labelClass}>
        Nombre
        <input name="name" type="text" required autoComplete="name" placeholder="Tu nombre" className={inputClass} />
      </label>
      <label className={labelClass}>
        Empresa
        <input name="company" type="text" autoComplete="organization" placeholder="Nombre de tu empresa" className={inputClass} />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        Email
        <input name="email" type="email" required autoComplete="email" placeholder="tu@empresa.com" className={inputClass} />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        Mensaje
        <textarea name="message" rows={4} required placeholder="Contanos qué necesitás" className={`${inputClass} resize-none`} />
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 sm:col-span-2">
          No se pudo enviar el mensaje. Probá de nuevo o escribinos a{" "}
          <a href="mailto:hola@duckit.com.ar" className="font-medium underline">hola@duckit.com.ar</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 disabled:cursor-wait disabled:opacity-70 sm:col-span-2 sm:justify-self-start"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
