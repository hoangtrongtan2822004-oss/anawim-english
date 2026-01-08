"use client";

/*
Component: AchievementsSection.tsx
Purpose: Showcase student achievements and awards.
Client: yes (keeps layout consistent with other sections)
Notes: Data lives in the local `students` array; extract to `data/` for dynamic content.
*/

const students = [
  { name: "Nguyễn Văn A", award: "Tên trường" },
  { name: "Nguyễn Văn B", award: "Tên trường" },
  { name: "Nguyễn Văn C", award: "Tên trường" },
  { name: "Nguyễn Văn D", award: "Tên trường" },
  { name: "Nguyễn Văn E", award: "Tên trường" },
  { name: "Nguyễn Văn F", award: "Tên trường" },
  { name: "Nguyễn Văn G", award: "Tên trường" },
  { name: "Nguyễn Văn H", award: "Tên trường" },
];

export default function AchievementsSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Bảng vàng thành tích của học viên Anawim English
          </h2>
          <div className="text-lg text-gray-700 font-medium">
            <span className="font-bold text-blue-700">250+ học viên</span> đã có
            kết quả trên 8.0 IELTS
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {students.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-4/3 bg-gray-200 rounded-lg mb-3" />
              <div className="text-base font-semibold text-gray-800 text-center">
                {s.name}
              </div>
              <div className="text-sm text-gray-500 text-center">{s.award}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
