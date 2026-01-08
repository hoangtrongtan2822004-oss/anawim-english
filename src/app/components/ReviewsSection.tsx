"use client";

/*
Component: ReviewsSection.tsx
Mục đích: Hiển thị các phản hồi/đánh giá của học viên dưới dạng card.
Props: Không nhận props; hiện dùng mảng `reviews` nội bộ. Có thể chấp nhận prop `reviews: Review[]` hoặc fetch từ API.
Ví dụ sử dụng:
  import ReviewsSection from './components/ReviewsSection';
  <ReviewsSection />
Ghi chú: Thêm tính năng load-more hoặc pagination nếu số lượng nhiều.
*/

const reviews = [
  {
    name: "Nguyễn Văn A",
    content:
      "Anawim giúp mình tự tin hơn rất nhiều khi giao tiếp tiếng Anh. Giáo viên tận tâm, lộ trình rõ ràng, kết quả vượt mong đợi!",
  },
  {
    name: "Nguyễn Văn B",
    content:
      "Mình thích nhất là app nhật ký học tập, giúp mình theo dõi tiến bộ từng ngày. Đội ngũ giáo viên rất chuyên nghiệp!",
  },
  {
    name: "Nguyễn Văn C",
    content:
      "Tài liệu học tập phong phú, phương pháp LinearThinking rất hiệu quả. Mình đã đạt IELTS 7.5 sau 6 tháng!",
  },
  {
    name: "Nguyễn Văn D",
    content:
      "Cơ sở vật chất hiện đại, nhiều hoạt động ngoại khoá bổ ích. Mình rất hài lòng khi học tại đây!",
  },
  {
    name: "Nguyễn Văn E",
    content:
      "Hỗ trợ học lại miễn phí giúp mình yên tâm hơn. Mình đã giới thiệu cho nhiều bạn bè cùng học!",
  },
  {
    name: "Nguyễn Văn F",
    content:
      "Lộ trình cá nhân hoá, giáo viên theo sát từng học viên. Mình tiến bộ rõ rệt chỉ sau 3 tháng!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Học viên nói gì khi học IELTS tại Anawim
          </h2>
          <div className="text-lg text-gray-700 font-medium">
            <span className="font-bold text-blue-700">300+ đánh giá</span> từ
            học viên và phụ huynh
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Placeholder avatar */}
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="font-semibold text-gray-800 text-base">
                  {r.name}
                  <div
                    style={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      alignSelf: "stretch",
                    }}
                  >
                    Tháng 05, 2025
                  </div>
                </div>
              </div>
              <div className="text-gray-700 text-base flex-1">{r.content}</div>
              <div className="flex items-center gap-1 mt-4">
                <a
                  href="#"
                  style={{
                    color: "#2563eb",
                    fontFamily: "Inter",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textDecoration: "underline",
                    display: "inline-block",
                  }}
                  className="hover:text-blue-700 transition-colors duration-200"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200">
            Xem thêm đánh giá
          </button>
        </div>
      </div>
    </section>
  );
}
