import type { Metadata } from "next";
import "./globals.scss";
import "@/public/font-icon/styles.css";
import ThemeProvider from "@/ThemeProvider";


export const metadata: Metadata = {
  title: "Verified Athletics",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
