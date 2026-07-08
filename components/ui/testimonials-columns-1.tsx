"use client";
import React from "react";
import { motion } from "motion/react";

// Depoimentos (conteúdo Atlas Service — mineração e indústria em MG)
const testimonials = [
  {
    text: "Alugamos dois compressores para a frente de lavra e a Atlas assumiu toda a manutenção. Máquina parada deixou de ser um problema por aqui.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Carlos Menezes",
    role: "Supervisor de Manutenção · Mineração, Brumadinho/MG",
  },
  {
    text: "O atendimento é direto com quem entende. Precisei de socorro num domingo e o técnico estava na planta em poucas horas.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Fernanda Rocha",
    role: "Gerente Industrial · Metalúrgica, Betim/MG",
  },
  {
    text: "Começamos alugando e depois compramos a máquina abatendo parte da locação. Modelo de negócio que faz sentido para a indústria.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "João Paulo Andrade",
    role: "Diretor de Operações · Britagem, Sete Lagoas/MG",
  },
  {
    text: "Óleo e componentes originais sempre à pronta entrega. Reduzimos o downtime dos nossos compressores em mais da metade.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Marcos Vinícius Teles",
    role: "Analista de PCM · Autopeças, Contagem/MG",
  },
  {
    text: "Fizeram o dimensionamento correto da nossa rede de ar comprimido. A economia de energia apareceu na conta já no primeiro mês.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Renata Albuquerque",
    role: "Engenheira de Processos · Cimenteira, Igarapé/MG",
  },
  {
    text: "Empresa séria, contrato claro, sem surpresa no fim do mês. A assistência técnica inclusa no aluguel foi o que fechou a decisão.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Anderson Luz",
    role: "Comprador Técnico · Mineração, Nova Lima/MG",
  },
  {
    text: "Atendem nossa unidade no Norte de Minas sem enrolação. Viajam, resolvem e a produção segue rodando.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Patrícia Camargos",
    role: "Coordenadora de Produção · Têxtil, Montes Claros/MG",
  },
  {
    text: "Trocamos um contrato antigo pela Atlas e o suporte melhorou da água pro vinho. Técnicos que conhecem compressor de parafuso de verdade.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Ricardo Nogueira",
    role: "Gerente de Manutenção · Siderurgia, Itabira/MG",
  },
  {
    text: "Do orçamento no WhatsApp à partida da máquina foram poucos dias. Agilidade rara nesse mercado.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Luciana Prates",
    role: "Sócia-administradora · Usinagem, Betim/MG",
  },
];

export const firstColumn = testimonials.slice(0, 3);
export const secondColumn = testimonials.slice(3, 6);
export const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration: props.duration || 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img width={40} height={40} src={image} alt={name} className="h-10 w-10 rounded-full" />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
