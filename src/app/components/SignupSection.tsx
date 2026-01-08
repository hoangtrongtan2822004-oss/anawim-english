"use client";

import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function SignupSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Center: Icon + Text info Messenger/Hotline/Address */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Messenger */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow mt-1">
              <MessageCircle className="w-7 h-7 text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Nhắn tin với Anawim qua Facebook
              </div>
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Click để liên hệ Anawim qua Messenger
              </div>
            </div>
          </div>
          {/* Hotline */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow mt-1">
              <Phone className="w-7 h-7 text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Gọi điện liên hệ
              </div>
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Liên hệ Anawim qua số hotline miễn phí: 1800 88 88 88
              </div>
            </div>
          </div>
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow mt-1">
              <MapPin className="w-7 h-7 text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Anawim có hơn 13+ cơ sở tại TP.HCM, Hà Nội và Đà Nẵng
              </div>
              <div
                style={{
                  color: "#000",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Click để xem địa chỉ chi tiết
              </div>
            </div>
          </div>
        </div>
        {/* Right: Ảnh lớn */}
        <div className="w-full md:w-[60%] flex items-center justify-center">
          <div className="bg-gray-300 rounded-3xl w-full h-80 flex items-center justify-center">
            <span className="text-3xl font-bold text-black">Ảnh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
