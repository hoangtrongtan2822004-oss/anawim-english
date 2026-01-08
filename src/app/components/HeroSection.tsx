"use client";

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
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="aspect-4/3 bg-gray-200 rounded-lg lg:mt-12" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg lg:mt-12" />
            <div className="aspect-4/3 bg-gray-200 rounded-lg" />
          </div>
          <p className="text-right text-xs text-gray-500 mt-2">
            Ảnh hoạt động thực tế tại Anawim
          </p>
        </div>
        {/* Floating CTA, Zalo, ScrollTop sẽ thêm sau */}
      </div>
    </section>
  );
}
