import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from 'next/font/google'

const font = Comfortaa({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "TicketPark Arraial",
  description: "Pré-agendamento de estacionamento em Arraial do Cabo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
