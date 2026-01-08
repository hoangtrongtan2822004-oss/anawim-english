"use client";

/*
Component: ValuesSection.tsx
Purpose: Display core values and unique selling points of Anawim.
Client: yes
Notes: Keep content concise; consider moving long copy to `data/`.
*/

"use client";

/*
Component: ValuesSection.tsx
Mục đích: Trình bày các giá trị cốt lõi và điểm khác biệt của Anawim.
Props: Không nhận props. Nội dung hiện tại là tĩnh; có thể chuyển sang lấy từ `data/`.
Ví dụ sử dụng:
  import ValuesSection from './components/ValuesSection';
  <ValuesSection />
Gợi ý: Tách nội dung dài ra file `data/` để dễ quản lý và dịch.
*/

export default function ValuesSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
          Giá trị khác biệt tại Anawim English
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Box 1 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="font-semibold text-lg text-gray-800 mb-2">
              Phương pháp Tư duy LinearThinking
            </div>
            <div className="text-gray-700 text-base mb-4">
              Phương pháp giúp học Tiếng Anh một cách logic và bản chất do
              Anawim English sáng tạo ra.
            </div>
            <a
              href="#"
              className="text-blue-700 text-sm font-medium mt-2 inline-block"
            >
              Tìm hiểu thêm
            </a>
          </div>
          {/* Box 2 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="font-semibold text-lg text-gray-800 mb-2">
              Tư liệu học tập độc quyền chỉ có tại Anawim English
            </div>
            <div className="text-gray-700 text-base mb-4">
              Tất cả sách đều do Anawim English tự lên nội dung và thiết kế theo
              tư duy riêng.
            </div>
            <a
              href="#"
              className="text-blue-700 text-sm font-medium mt-2 inline-block"
            >
              Xem sách của Anawim
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Box 3: Nền tảng công nghệ toàn diện */}
          <div className="bg-gray-300 rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg text-gray-900 mb-2">
                Nền tảng công nghệ toàn diện
                <br />
                và đột phá
              </div>
              <div className="text-gray-800 text-base mb-1">
                Xem chi tiết tính năng
              </div>
              <ul className="text-gray-800 text-base flex flex-col gap-2 pl-0">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Theo dõi quá trình học của học viên
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Thống kê điểm danh và làm bài
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Luyện tập không giới hạn mọi lúc, mọi nơi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Kho bài tập đa dạng riêng cho từng khóa
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Giáo viên chấm & trả bài trực tiếp qua LMS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  Ứng dụng công nghệ AI vào chấm bài
                </li>
              </ul>
            </div>
          </div>
          {/* Box 4: Ảnh lớn */}
          <div className="bg-gray-200 rounded-lg aspect-3/2 md:aspect-auto min-h-45 md:min-h-0" />
        </div>
      </div>
    </section>
  );
}
