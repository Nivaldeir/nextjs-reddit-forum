'use client'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Header from "./header/header";
import { MessagePrivate } from "./message-private";
import { Toaster } from "./ui/toaster";

const queryClient = new QueryClient();
export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <Header />
        <MessagePrivate />
        <Toaster />
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  );
};
