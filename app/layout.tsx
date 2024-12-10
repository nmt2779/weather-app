import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider/ThemeProvider";
import { CodeXmlIcon } from "lucide-react";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}, min-h-screen `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto flex flex-col px-[1rem] antialiased md:px-[2rem] ">
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
