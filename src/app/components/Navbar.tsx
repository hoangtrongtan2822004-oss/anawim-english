"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// Định nghĩa cấu trúc dữ liệu cho Menu
const menuItems = [
  {
    label: "Về Anawim",
    submenu: [
      { label: "Giới thiệu chung", href: "/ve-anawim/gioi-thieu" },
      { label: "Tuyển dụng", href: "/ve-anawim/tuyen-dung" },
      { label: "Tin tức", href: "/ve-anawim/tin-tuc" },
      { label: "Hệ thống cơ sở", href: "/ve-anawim/co-so" },
    ],
  },
  {
    label: "Điểm khác biệt",
    submenu: [
      { label: "Linearthinking", href: "/khac-biet/linearthinking" },
      { label: "Giáo viên", href: "/khac-biet/giao-vien" },
      { label: "Công nghệ", href: "/khac-biet/cong-nghe" },
      { label: "Trải nghiệm học tập", href: "/khac-biet/trai-nghiem" },
    ],
  },
  {
    label: "Sách giáo trình",
    href: "/sach-giao-trinh", // Không có submenu
  },
  {
    label: "Điểm và review",
    href: "/diem-review", // Không có submenu
  },
  {
    label: "Khoá học",
    submenu: [
      { label: "IELTS cơ bản", href: "/khoa-hoc/ielts-co-ban" },
      { label: "IELTS nâng cao", href: "/khoa-hoc/ielts-nang-cao" },
      { label: "IELTS cấp tốc", href: "/khoa-hoc/ielts-cap-toc" },
      { label: "Tiếng Anh THCS", href: "/khoa-hoc/tieng-anh-thcs" },
      { label: "SAT", href: "/khoa-hoc/sat" },
    ],
  },
  {
    label: "Lịch khai giảng",
    submenu: [
      { label: "Lịch học và ưu đãi", href: "/lich/uu-dai" },
      { label: "Hỗ trợ học lại miễn phí", href: "/lich/ho-tro" },
    ],
  },
  {
    label: "Kiến thức IELTS",
    submenu: [
      { label: "Tổng quan về IELTS", href: "/kien-thuc/tong-quan" },
      { label: "Reading", href: "/kien-thuc/reading" },
      { label: "Writing", href: "/kien-thuc/writing" },
      { label: "Listening", href: "/kien-thuc/listening" },
      { label: "Speaking", href: "/kien-thuc/speaking" },
      { label: "Ngữ pháp", href: "/kien-thuc/grammar" },
      { label: "Từ vựng", href: "/kien-thuc/vocabulary" },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-3xl font-serif font-bold text-blue-900 italic"
            >
              Logo công ty
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-4 items-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group h-20 flex items-center"
              >
                {item.submenu ? (
                  // Render mục có Menu con (Dropdown)
                  <>
                    <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors group-hover:text-blue-800 py-2">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="ml-1 mt-0.5 group-hover:rotate-180 transition-transform duration-200"
                      />
                    </button>

                    {/* Dropdown Content */}
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-blue-600">
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  // Render mục đơn (Link thường)
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Inbox Button */}
          <button className="hidden xl:block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-sm rounded-lg transition-colors">
            Inbox Anawim
          </button>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Đơn giản hóa cho mobile) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <div className="px-3 py-3 font-medium text-gray-800">
                  {item.label}
                </div>
                {item.submenu && (
                  <div className="pl-6 pb-2 space-y-2">
                    {item.submenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block text-sm text-gray-500 py-1"
                      >
                        - {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
