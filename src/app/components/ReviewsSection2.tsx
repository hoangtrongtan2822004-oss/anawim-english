"use client";

/*
Component: ReviewsSection2.tsx
Mục đích: Bản sao khác của phần reviews, hiển thị dạng feed 2 cột (phù hợp với sự kiện hoặc bài viết ngắn).
Props: Không nhận props; hiện dùng mảng `reviews` giả lập. Có thể thay bằng prop `items`.
Ví dụ sử dụng:
  import ReviewsSection2 from './components/ReviewsSection2';
  <ReviewsSection2 />
Gợi ý: Dùng khi cần layout khác với `ReviewsSection` để phân loại nội dung.
*/

const reviews = Array.from({ length: 8 }).map((_, i) => ({
  name: `Nguyễn Văn ${String.fromCharCode(65 + i)}`,
  content:
    "Vào sáng ngày 12/4, tại Trường Đại học Sư phạm TP.HCM, hơn 800 giáo viên tiếng Anh ...",
}));

export default function ReviewsSection2() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-black text-left md:text-left">
            Sự kiện tiêu biểu của Anawim English
          </h2>
          <div className="text-right">
            <div className="text-2xl font-bold text-black">
              1000+ buổi chia sẻ
            </div>
            <div className="text-base text-black">
              Được các trường Đại học & Trung học mời tham dự
            </div>
          </div>
        </div>
        {/* Two-column feed layout:
            - reviews array is split into two columns by slicing the array into chunks of 4
            - each item shows a thumbnail + excerpt
            - use more robust chunking if list length changes
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-6">
              {reviews.slice(col * 4, col * 4 + 4).map((r, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
                >
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center font-bold text-lg text-gray-500">
                    Ảnh
                  </div>
                  {/* Excerpt */}
                  <div className="flex-1">
                    <div className="text-base text-black font-medium mb-1 line-clamp-2">
                      {r.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-gray-300 text-gray-700 text-base font-medium rounded-md hover:bg-gray-400 transition-colors duration-200">
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
}
