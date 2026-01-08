"use client";

/*
Component: FloatingPopups.tsx
Mục đích: Hiển thị các pop-up nổi cố định bên phải trang (vertical stack).
Props: Không nhận props hiện tại. Có thể mở rộng để truyền items.
Ví dụ sử dụng:
  import FloatingPopups from './components/FloatingPopups';
  <FloatingPopups />
Client: cần (vì có vị trí fixed và tương tác ngắn gọn).
*/

import React from "react";
import { ArrowUp, MessageSquare, Music, Star } from "lucide-react";

export default function FloatingPopups() {
  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-center gap-4 pointer-events-none">
      {/* Top vertical cards */}
      <div className="pointer-events-auto flex flex-col items-center gap-3">
        <a
          href="#reviews"
          className="bg-emerald-600 text-white rounded-lg px-3 py-2 shadow-lg w-28 text-center font-medium text-sm transform hover:-translate-y-0.5 transition"
          aria-label="Điểm & Review"
        >
          <div className="flex flex-col items-center gap-1">
            <Star className="w-4 h-4" />
            <span className="text-sm leading-tight">Điểm &amp; Review</span>
          </div>
        </a>

        <a
          href="#linear-thinking"
          className="bg-rose-600 text-white rounded-lg px-3 py-2 shadow-lg w-28 text-center font-medium text-sm transform hover:-translate-y-0.5 transition"
          aria-label="Linear-thinking"
        >
          <div className="flex flex-col items-center gap-1">
            <Music className="w-4 h-4" />
            <span className="text-sm leading-tight">Linear-thinking</span>
          </div>
        </a>

        <a
          href="#books"
          className="bg-violet-700 text-white rounded-lg px-3 py-2 shadow-lg w-28 text-center font-medium text-sm transform hover:-translate-y-0.5 transition"
          aria-label="Sách độc quyền"
        >
          <div className="flex flex-col items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12v-2H6V4h12V2H6z" />
              <path
                d="M20 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12V6z"
                opacity=".6"
              />
            </svg>
            <span className="text-sm leading-tight">Sách độc quyền</span>
          </div>
        </a>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Circular quick actions */}
      <div className="flex flex-col items-center gap-3 pointer-events-auto">
        <a
          href="#top"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-zinc-700" />
        </a>

        <a
          href="https://m.me/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          aria-label="Messenger"
        >
          <MessageSquare className="w-6 h-6 text-blue-600" />
        </a>

        <a
          href="https://zalo.me/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          aria-label="Zalo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-7 h-7"
          >
            <path
              fill="#2563eb"
              d="M256 0C114.62 0 0 93.1 0 208c0 53.6 25.74 102.3 68.7 138.4L32 480l146.9-56.62C224.8 432.9 239.1 435 256 435c141.4 0 256-93.1 256-208S397.4 0 256 0z"
            />
            <path
              fill="#fff"
              d="M159 160c-9 0-16 7-16 16v48c0 28 23 64 40 80 17 16 32 24 64 24 27 0 44-9 56-21 9-9 15-19 15-36 0-22-18-36-34-36-17 0-29 9-49 9-16 0-24-9-24-20 0-29 49-40 82-40 28 0 48 6 60 18v-40c-14-13-34-22-66-22-41 0-81 21-102 21z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
