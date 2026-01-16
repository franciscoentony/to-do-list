import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "To-do List | Francisco Entony",
  description: "Criado por Francisco Entony",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
