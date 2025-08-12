import "@/styles/globals.css";
import { generateMetadata } from "@/functions";
import { productSans } from "@/constants";
import { cn } from "@/utils";
import { ThemeProvider } from "@/providers";
import { Header, Footer } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-[#030303] text-foreground font-sans",
          productSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="">
            {children} <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
