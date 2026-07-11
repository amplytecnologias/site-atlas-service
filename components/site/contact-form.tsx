"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/lib/site";

const serviceOptions = [
  "Aluguel de compressor",
  "Venda de máquina",
  "Filtros e óleo",
  "Manutenção / assistência técnica",
  "Outro assunto",
];

const inputClass =
  "h-11 w-full rounded-md border border-input bg-white px-3.5 text-sm text-brand-ink placeholder:text-brand-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Orçamento pelo site — ${data.get("servico")}`;
    const lines = [
      "Olá! Vim pelo site da Atlas Service.",
      "",
      `Nome: ${data.get("nome")}`,
      data.get("empresa") ? `Empresa: ${data.get("empresa")}` : null,
      `Telefone: ${data.get("telefone")}`,
      `Serviço de interesse: ${data.get("servico")}`,
      data.get("mensagem") ? `Mensagem: ${data.get("mensagem")}` : null,
    ].filter(Boolean);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate={false}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-semibold text-brand-ink">
          Nome <span aria-hidden className="text-destructive">*</span>
        </label>
        <input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Seu nome" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="empresa" className="text-sm font-semibold text-brand-ink">
          Empresa
        </label>
        <input id="empresa" name="empresa" type="text" autoComplete="organization" placeholder="Nome da empresa" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefone" className="text-sm font-semibold text-brand-ink">
          Telefone / WhatsApp <span aria-hidden className="text-destructive">*</span>
        </label>
        <input id="telefone" name="telefone" type="tel" required autoComplete="tel" placeholder="(31) 9XXXX-XXXX" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="servico" className="text-sm font-semibold text-brand-ink">
          Serviço de interesse <span aria-hidden className="text-destructive">*</span>
        </label>
        <select id="servico" name="servico" required className={inputClass} defaultValue={serviceOptions[0]}>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="mensagem" className="text-sm font-semibold text-brand-ink">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte rapidamente sua necessidade: vazão, pressão, prazo..."
          className="w-full rounded-md border border-input bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        />
      </div>

      <p className="text-sm text-muted-foreground sm:col-span-2">
        Ao enviar, seu aplicativo de e-mail abre com a mensagem pronta para {EMAIL} — é só confirmar o
        envio.
      </p>

      <Button type="submit" size="lg" className="gap-2 bg-brand text-white hover:bg-brand-dark sm:col-span-2">
        <Mail className="h-5 w-5" />
        Enviar por e-mail
      </Button>

      {sent && (
        <p role="status" className="text-sm font-medium text-brand-teal sm:col-span-2">
          Mensagem preparada no seu aplicativo de e-mail! Se nada abriu, escreva direto para {EMAIL}.
        </p>
      )}
    </form>
  );
}
