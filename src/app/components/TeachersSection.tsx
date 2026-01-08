"use client";

/*
Component: TeachersSection.tsx
Purpose: Grid/listing of teachers with brief summary and CTA to view all teachers.
Client: yes
Notes: Teacher data is currently local; consider fetching from a CMS or API.
*/

const teachers = [
  { name: "Nguyễn Văn A", role: "Chức vụ" },
  { name: "Nguyễn Văn B", role: "Chức vụ" },
  { name: "Nguyễn Văn C", role: "Chức vụ" },
  { name: "Nguyễn Văn D", role: "Chức vụ" },
  { name: "Nguyễn Văn E", role: "Chức vụ" },
];

export default function TeachersSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
          Đội ngũ giáo viên
        </h2>
        <div className="flex flex-col items-center mt-8">
          {/* Text giới thiệu số lượng giáo viên */}
          <span
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
            className="mb-6"
          >
            Anawim bao gồm 73 giáo viên
          </span>
          <div
            style={{
              color: "#000",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              width: 734,
              margin: "32px auto 32px",
            }}
            className="mx-auto"
          >
            Là những giáo viên giỏi kiến thức và giỏi truyền đạt. Rất tận tâm
            với học viên, đi dạy vì cái tâm và luôn khát khao cải tiến việc học
            Tiếng Anh ở Việt Nam.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {teachers.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full aspect-4/5 bg-gray-200 rounded-lg mb-3" />
                <div className="text-base font-semibold text-gray-800 text-center">
                  {t.name}
                </div>
                <div className="text-sm text-gray-500 text-center">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
          <button
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className="bg-zinc-300 px-8 py-3 rounded mt-8"
          >
            Xem tất cả các giáo viên
          </button>
        </div>
      </div>
    </section>
  );
}
