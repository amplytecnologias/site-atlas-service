"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackFormSubmit } from "@/lib/gtag";
import { EMAIL } from "@/lib/site";
import { NAO_ATENDEMOS_PISTAO_TEXT, QUALIFICADOR_FORM, SHOW_NAO_ATENDEMOS_PISTAO } from "@/lib/config";

// Envio real pelo Web3Forms. A chave fica na variável de ambiente
// NEXT_PUBLIC_WEB3FORMS_KEY (Vercel). O e-mail de destino é o cadastrado na
// chave do Web3Forms (contato@atlasservicemg.com.br).
// Sem a chave configurada, o formulário volta ao comportamento antigo
// (abre o aplicativo de e-mail) para nenhum pedido se perder.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const serviceOptions = [
  "Aluguel de compressor",
  "Venda de máquina",
  "Filtros e óleo (compressor de parafuso)",
  "Manutenção (compressor de parafuso)",
  "Outro assunto",
];

const inputClass =
  "h-11 w-full rounded-md border border-input bg-white px-3.5 text-sm text-brand-ink placeholder:text-brand-gray transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60";

type Status = "idle" | "sending" | "success" | "error";

function origemDaVisita() {
  try {
    return sessionStorage.getItem("origem_visita") === "anuncio" ? "Anúncio do Google" : "Site";
  } catch {
    return "Site";
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Campo invisível anti-spam: robôs preenchem, pessoas não.
    if (data.get("botcheck")) return;

    const nome = String(data.get("nome") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const telefone = String(data.get("telefone") ?? "");
    const servico = String(data.get("servico") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");
    const subject = `Orçamento pelo site — ${servico}`;

    // Sem chave: comportamento anterior (mailto), com a conversão registrada.
    if (!WEB3FORMS_KEY) {
      const lines = [
        "Olá! Vim pelo site da Atlas Service.",
        "",
        `Nome: ${nome}`,
        empresa ? `Empresa: ${empresa}` : null,
        `Telefone: ${telefone}`,
        `Serviço de interesse: ${servico}`,
        mensagem ? `Mensagem: ${mensagem}` : null,
      ].filter(Boolean);
      trackFormSubmit();
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "Site Atlas Service",
          Nome: nome,
          Empresa: empresa || "—",
          "Telefone / WhatsApp": telefone,
          "Serviço de interesse": servico,
          Mensagem: mensagem || "—",
          Origem: origemDaVisita(),
          Página: window.location.href,
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
      if (!response.ok || !result?.success) throw new Error("Falha no envio");

      // Conversão do formulário no Google Ads — só depois do envio confirmado.
      trackFormSubmit();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  if (status === "success" && WEB3FORMS_KEY) {
    return (
      <div role="status" className="form-success flex flex-col items-center rounded-xl bg-white p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <p className="mt-4 font-display text-lg font-bold tracking-tight text-brand-ink">Pedido enviado</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Recebemos sua mensagem e vamos responder em breve pelo telefone ou WhatsApp informado.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Enviar outro pedido
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* Anti-spam (honeypot) — invisível para pessoas */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-semibold text-brand-ink">
          Nome <span aria-hidden className="text-destructive">*</span>
        </label>
        <input id="nome" name="nome" type="text" required disabled={sending} autoComplete="name" placeholder="Seu nome" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="empresa" className="text-sm font-semibold text-brand-ink">
          Empresa
        </label>
        <input id="empresa" name="empresa" type="text" disabled={sending} autoComplete="organization" placeholder="Nome da empresa" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefone" className="text-sm font-semibold text-brand-ink">
          Telefone / WhatsApp <span aria-hidden className="text-destructive">*</span>
        </label>
        <input id="telefone" name="telefone" type="tel" required disabled={sending} autoComplete="tel" placeholder="(31) 9XXXX-XXXX" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="servico" className="text-sm font-semibold text-brand-ink">
          Serviço de interesse <span aria-hidden className="text-destructive">*</span>
        </label>
        <select id="servico" name="servico" required disabled={sending} className={inputClass} defaultValue={serviceOptions[0]}>
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
          disabled={sending}
          placeholder="Modelo do compressor de parafuso, vazão, pressão, prazo..."
          className="w-full rounded-md border border-input bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
        />
      </div>

      {!WEB3FORMS_KEY && (
        <p className="text-sm text-muted-foreground sm:col-span-2">
          Ao enviar, seu aplicativo de e-mail abre com a mensagem pronta para {EMAIL}.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="gap-2 bg-brand text-white hover:bg-brand-dark sm:col-span-2"
      >
        {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {sending ? "Enviando..." : "Enviar pedido de orçamento"}
      </Button>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 text-sm font-medium text-destructive sm:col-span-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Não foi possível enviar agora. Tente de novo ou escreva para {EMAIL}.
        </p>
      )}
      {status === "success" && !WEB3FORMS_KEY && (
        <p role="status" className="text-sm font-medium text-brand-teal sm:col-span-2">
          Mensagem preparada no seu aplicativo de e-mail! Se nada abriu, escreva direto para {EMAIL}.
        </p>
      )}

      <p className="flex items-start gap-2 rounded-lg bg-brand/5 px-3.5 py-2.5 text-sm font-semibold text-brand-dark sm:col-span-2">
        {QUALIFICADOR_FORM}
        {SHOW_NAO_ATENDEMOS_PISTAO && <> {NAO_ATENDEMOS_PISTAO_TEXT}</>}
      </p>
    </form>
  );
}
