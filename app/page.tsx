import { Hero } from "@/components/ui/animated-hero";
import { QuemSomos } from "@/components/site/sections/quem-somos";
import { Servicos } from "@/components/site/sections/servicos";
import { Produtos } from "@/components/site/sections/produtos";
import { ComoFunciona } from "@/components/site/sections/como-funciona";
import { Clientes } from "@/components/site/sections/clientes";
import { PorQue } from "@/components/site/sections/por-que";
import { Avaliacoes } from "@/components/site/sections/avaliacoes";
import { Contato } from "@/components/site/sections/contato";

export default function Home() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <Servicos />
      <Produtos />
      <ComoFunciona />
      <Clientes />
      <PorQue />
      <Avaliacoes />
      <Contato />
    </>
  );
}
