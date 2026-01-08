import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import font Inter
import "./globals.css";
import Navbar from "./components/Navbar";

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
      {/* Thêm inter.variable vào className của body */}
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
