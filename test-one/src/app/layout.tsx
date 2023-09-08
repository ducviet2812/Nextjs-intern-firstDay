import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["vietnamese"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Login Form",
  description: "First Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}} className={quicksand.className}>{children}</body>
    </html>
  );
}
