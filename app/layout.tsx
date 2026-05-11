import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeechInfra HK",
  description:
    "Hong Kong-based AI speech data infrastructure platform frontend prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
