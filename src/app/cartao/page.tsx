import type { Metadata } from "next";
import CartaoVisita from "@/components/segmentos/CartaoVisita";

export const metadata: Metadata = {
  title: "Cartão de visita Aura Energy · Renato Edson",
  description:
    "Cartão de visita Aura Energy pronto pra impressão em gráfica. Frente + verso com QR code apontando pra LP /links.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartaoPage() {
  return <CartaoVisita />;
}
