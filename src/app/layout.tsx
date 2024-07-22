import type { Metadata } from "next";
import "./globals.css";
import SessionAuthProvider from "@/contexts/SessionProvider";
import NavBar from "@/components/common/NavBar";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"
import AppBar from "@/components/common/AppBar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionAuthProvider>
              <AppBar />
              {children}
            </SessionAuthProvider>
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
