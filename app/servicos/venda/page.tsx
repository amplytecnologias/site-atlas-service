import { redirect } from "next/navigation";

// Locação e venda agora vivem numa página única.
export default function VendaPage() {
  redirect("/servicos/locacao-e-venda");
}
