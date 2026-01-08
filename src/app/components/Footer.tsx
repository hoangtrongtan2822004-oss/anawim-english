"use client";
/*
Component: Footer.tsx
Mục đích: Chân trang chứa danh sách cơ sở, link khóa học, thông tin liên hệ và icon mạng xã hội.
Props: Không nhận props.
Ví dụ sử dụng:
  import Footer from './components/Footer';
  <Footer />
Lưu ý: Liên kết xã hội mở ở tab mới (`target="_blank"`). Hiện đang dùng `Music` tạm cho TikTok vì thư viện icon chưa có symbol chính thức.
*/
import { Facebook, Youtube, Music } from "lucide-react"; // lucide-react chưa có icon Tiktok, dùng tạm Music

export default function Footer() {
  return (
    <footer className="bg-gray-200 font-sans border-t border-gray-300 mt-0 text-black w-full">
      <div className="w-full px-0 sm:px-8 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12">
          {/* Cột 1: Danh sách cơ sở + thông tin liên hệ */}
          <div>
            {/* Header for HCM locations; keep copy updated with real counts */}
            <div className="font-semibold mb-2 border-b border-black pb-1">
              CƠ SỞ TẠI TPHCM (11)
            </div>
            <div className="text-sm mb-1">
              <b>Cơ sở 1:</b> Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM
            </div>
            <div className="text-sm mb-1">
              <b>Cơ sở 2:</b> 183c Nguyễn Văn Đậu, Phường 11, Bình Thạnh, TP.HCM
            </div>
            <div className="text-sm mb-1">
              <b>Cơ sở 3:</b> 24A Bàu Cát 2, Tân Bình, P.14, TP.HCM
            </div>
            <div className="text-xs underline cursor-pointer">
              Xem thêm &gt;
            </div>
            <div className="border-b border-black my-3" />
            <div className="font-semibold mb-2">CƠ SỞ TẠI HÀ NỘI (2)</div>
            <div className="text-sm mb-1">
              <b>Cơ sở 1:</b> Lầu 2, Tòa nhà Gold Tower, 275 Nguyễn Trãi, Thanh
              Xuân, Hà Nội.
            </div>
            <div className="text-sm mb-1">
              <b>Cơ sở 2:</b> Tầng G, số 158 Phố Chùa Láng, P.Láng Thượng,
              Q.Đống Đa, Hà Nội
            </div>
            <div className="border-b border-black my-3" />
            <div className="font-semibold mb-2">CƠ SỞ TẠI ĐÀ NẴNG (1)</div>
            <div className="text-sm mb-1">
              <b>Cơ sở 1:</b> Tầng 3, Thư Dung Plaza, 87 Nguyễn Văn Linh, Phường
              Phước Ninh, Quận Hải Châu, Đà Nẵng
            </div>
            <div className="border-b border-black my-3" />
            <div className="font-semibold mb-2">THÔNG TIN LIÊN HỆ</div>
            <div className="text-sm mb-1">
              Inbox: <span className="underline">m.me/anawim.anawim</span>
            </div>
            <div className="text-sm mb-1">
              Hotline: <span className="font-semibold">1800 96 96 39</span>
            </div>
            {/* Social follow section */}
            <div className="font-semibold mt-3 mb-1">Theo dõi Anawim tại</div>
            <div className="flex gap-2">
              <a
                href="https://facebook.com/anawim.anawim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black border border-gray-400 hover:bg-blue-100 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@anawim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black border border-gray-400 hover:bg-gray-100 transition"
              >
                {/* Placeholder for TikTok icon: replace with official SVG when available */}
                <Music className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@anawim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black border border-gray-400 hover:bg-red-100 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Cột 2: Khóa học IELTS - danh sách liên kết (hiện là text tĩnh) */}
          <div>
            <div className="font-semibold mb-2 border-b border-black pb-1">
              KHÓA HỌC IELTS
            </div>
            <div className="text-sm">IELTS Intensive 0</div>
            <div className="text-sm">IELTS Intensive 1</div>
            <div className="text-sm">IELTS Intensive 2</div>
            <div className="text-sm">IELTS Super Intensive</div>
            <div className="text-sm">PRE IELTS</div>
            <div className="text-sm">IELTS 4.0+</div>
            <div className="text-sm">IELTS 5.0+</div>
            <div className="text-sm">IELTS 6.0+</div>
            <div className="text-sm">IELTS 6.5+</div>
            <div className="text-sm">IELTS 7.0+</div>
            <div className="text-sm">IELTS Writing & Speaking</div>
            <div className="text-sm">IELTS Online</div>
          </div>
          {/* Cột 3: Khóa học khác + phần 'VỀ ANAWIM' */}
          <div>
            <div className="font-semibold mb-2 border-b border-black pb-1">
              KHÓA HỌC KHÁC
            </div>
            <div className="text-sm">GMAT/GRE</div>
            <div className="text-sm">SAT</div>
            <div className="text-sm">TOEIC</div>
            <div className="text-sm">Phát âm</div>
            <div className="text-sm">IELTS Junior THCS+</div>
            <div className="text-sm">Tiếng Anh THPT & DGNL</div>
            <div className="font-semibold mt-4 mb-2 border-b border-black pb-1">
              VỀ ANAWIM
            </div>
            <div className="text-sm">Phương pháp LinearThinking</div>
            <div className="text-sm">Lịch học và ưu đãi</div>
            <div className="text-sm">Đội ngũ giáo viên</div>
            <div className="text-sm">Thành tích và cảm nhận học viên</div>
            <div className="text-sm">Tự học IELTS</div>
            <div className="text-sm">Nền tảng công nghệ</div>
          </div>
          {/* Cột 4: cột trống để cân layout trên desktop; dùng responsive grid */}
          <div />
        </div>
        {/* Bottom bar */}
        <div className="border-t border-gray-400 pt-4 mt-8 flex flex-col gap-2 text-xs text-black">
          {/* Bottom bar: copyright and quick links. Keep legal copy up-to-date. */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>© 2026 Anawim English. All rights reserved.</div>
            <div className="flex gap-2 md:gap-4">
              <span>Giới thiệu</span>
              <span>Chính sách bảo mật</span>
              <span>Điều khoản sử dụng</span>
            </div>
          </div>
          <div>Thuộc sở hữu của Công ty TNHH Anawim English</div>
          <div>MST: 0315174306</div>
        </div>
      </div>
    </footer>
  );
}
