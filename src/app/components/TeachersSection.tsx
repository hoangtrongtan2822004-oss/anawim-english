"use client";

/*
Component: TeachersSection.tsx
Mục đích: Hiển thị danh sách/luới giáo viên, kèm mô tả ngắn và CTA xem tất cả.
Props: Không nhận props; có thể chuyển sang nhận `teachers: Teacher[]` để linh hoạt.
Ví dụ sử dụng:
  import TeachersSection from './components/TeachersSection';
  <TeachersSection />
Gợi ý: Dữ liệu giáo viên nên được lưu trong `data/` hoặc lấy từ API cho production.
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
          {/*
            Intro text:
            - Số lượng giáo viên hiển thị tĩnh ở đây; nếu dữ liệu thật, nên lấy từ API.
            - Sử dụng inline styles cho typography cụ thể (có thể refactor sang Tailwind).
          */}
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
          {/*
            Description paragraph: constrained to a max width (734px) for readability.
            Keep the copy concise; consider moving copy to `data/` for translations.
          */}
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
          {/*
            Teacher grid:
            - Responsive: 2 cols (small) → 3 cols (sm) → 5 cols (md)
            - Each card currently uses a gray placeholder for the photo.
            - Consider lazy-loading real images and adding alt text when replacing placeholders.
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {teachers.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Photo placeholder; replace with Next/Image and provide `alt` for accessibility */}
                <div className="w-full aspect-4/5 bg-gray-200 rounded-lg mb-3" />
                {/* Teacher name */}
                <div className="text-base font-semibold text-gray-800 text-center">
                  {t.name}
                </div>
                {/* Role / title */}
                <div className="text-sm text-gray-500 text-center">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
          {/* CTA: xem đầy đủ danh sách giáo viên. Có thể chuyển thành Link tới trang danh sách giáo viên. */}
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
