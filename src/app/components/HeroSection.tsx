"use client";

/*
Component: HeroSection.tsx
Mục đích: Hiển thị phần hero ở đầu trang gồm tiêu đề lớn, mô tả ngắn và CTA.
Props: Không nhận props (hiện tại). Nếu cần truyền dữ liệu, thêm interface `HeroProps`.
Ví dụ sử dụng:
  import HeroSection from './components/HeroSection';
  <HeroSection />
Client: có (nếu bạn thêm tương tác hoặc slider). Giữ tối giản để không ảnh hưởng bundle.
*/

export default function HeroSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
        {/* Left: Title & Features */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <h1
              className="font-sans"
              style={{
                color: "#000",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                alignSelf: "stretch",
                marginBottom: "0.5em",
              }}
            >
              Anawim English
              <br />
              Học viện Tiếng Anh Tư Duy đầu tiên tại Việt Nam
            </h1>
            {/* Feature list: ngắn gọn các lợi ích chính. Giữ dạng danh sách để dễ đọc, có thể chuyển sang icons riêng nếu muốn. */}
            <ul className="mt-6 space-y-3 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-xl">✔️</span> LinearThinking: Học Tiếng
                Anh theo logic và bản chất
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✔️</span> Nền tảng công nghệ toàn diện
                và đột phá
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✔️</span> Đội ngũ giáo viên giỏi và
                tận tâm
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✔️</span> Chuyên đào tạo IELTS, SAT và
                Junior cấp 2
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3 bg-rose-600 text-white text-base font-medium rounded-md hover:bg-gray-800 transition-colors duration-200">
                LinearThinking là gì?
              </button>
            </div>
          </div>
        </div>
        {/* Right: 4 Images Grid Placeholder */}
        {/* Right: Image grid placeholder */}
        <div className="w-full lg:w-1/2">
          {/* 2x2 grid of images; use Next/Image when adding real images for optimization */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="aspect-4/3 bg-gray-200 rounded-lg lg:mt-12" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg lg:mt-12" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg" />
          </div>
          {/* Image credit / caption */}
          <p className="text-right text-xs text-gray-500 mt-2">
            Ảnh hoạt động thực tế tại Anawim
          </p>
        </div>
      </div>
    </section>
  );
}
