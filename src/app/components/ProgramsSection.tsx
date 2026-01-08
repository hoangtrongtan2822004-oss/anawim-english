"use client";

/*
Component: ProgramsSection.tsx
Purpose: List of learning programs with icons and optional badges.
Client: yes (if you add interactive filters or CTAs)
Notes: Icons are imported from `programIcons.ts`.
*/

import { programIcons } from "./programIcons";

const programs = [
  { name: "Tiếng Anh THCS", isNew: true },
  { name: "IELTS Tiêu Chuẩn", isNew: false },
  { name: "IELTS cấp tốc", isNew: false },
  { name: "Tiếng Anh THPT & DGNL", isNew: true },
  { name: "SAT / GMAT / GRE", isNew: false },
  { name: "TOEIC / Phát âm", isNew: false },
];

export default function ProgramsSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
          Các chương trình học tại Anawim English
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {programs.map((program, idx) => {
            const Icon = programIcons[idx % programIcons.length];
            return (
              <div key={idx} className="relative">
                <button
                  className="flex items-center gap-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-800 text-lg font-medium px-8 py-5 shadow transition-colors duration-200 w-full"
                  style={{ minHeight: 72 }}
                >
                  <Icon className="w-6 h-6 text-blue-500 shrink-0" />
                  <span>{program.name}</span>
                </button>
                {program.isNew && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mới
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
