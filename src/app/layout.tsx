/*
Root layout: `layout.tsx`
Purpose: App root layout for Next.js App Router. Wraps all pages, loads global fonts and the `Navbar`.
Notes: This is a server component by default. Keep client-only code out of this file.
*/
/**
 * Component: layout.tsx
 * Mục đích: Layout gốc cho Next.js App Router, đóng vai trò bao quanh mọi trang.
 * Props: { children: React.ReactNode }
 * Ví dụ sử dụng:
 *   import RootLayout from './layout';
 *   <RootLayout>{children}</RootLayout>
 * Lưu ý:
 * - Đây là server component theo mặc định; không đưa logic browser-only vào đây.
 * - Font Inter được nạp và gán vào biến CSS để dùng toàn cục.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import font Inter
import "./globals.css";
import Navbar from "./components/Navbar";
import FloatingPopups from "./components/FloatingPopups";

// Cấu hình font Inter với biến CSS --font-inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // <-- Quan trọng: Đặt tên biến ở đây
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anawim English",
  description: "Học viện Tiếng Anh Tư Duy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/*
        Body: apply Inter font variable and global antialiasing.
        - `Navbar` is a client component and is placed at the top.
        - `main` contains page-specific content (server components can be nested inside).
        - `FloatingPopups` is a client component rendered site-wide for quick actions.
      */}
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        {/* Floating popups fixed on the right side */}
        <FloatingPopups />
      </body>
    </html>
  );
}
