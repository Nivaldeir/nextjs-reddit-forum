import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={`${inter.className} relative`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
