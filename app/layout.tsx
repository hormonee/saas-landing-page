import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "HormonicFlow",
  description: "AI와 함께 더 빠르게 더 잘 쓰세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-display overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-300">
        <ThemeProvider>
          <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
