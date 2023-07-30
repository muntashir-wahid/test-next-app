"use client";

import UserProvider from "@/store/UserProvider";
import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <body>{children}</body>
        </UserProvider>
      </QueryClientProvider>
    </html>
  );
}
