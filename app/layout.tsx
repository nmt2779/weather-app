import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider/ThemeProvider";
import { CodeXmlIcon } from "lucide-react";
import Navigation from "@/components/Navigation";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Weather Forecast",
  description: "Weather forecast application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className}, min-h-screen `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto flex flex-col gap-2 py-2 px-[1rem] antialiased md:px-[2rem] ">
            <Navigation />
            {children}
            <footer
              className="py-4 flex items-center justify-center gap-2"
              aria-hidden={true}
            >
              <CodeXmlIcon className="h-5 w-5 " />
              <span>by</span>
              <b>MTN</b>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
