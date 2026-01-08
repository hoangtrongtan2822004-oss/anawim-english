"use client";

/*
Component: LocationsSection.tsx
Purpose: Grid of Anawim branches with addresses and CTA.
Client: yes
Notes: Consider extracting addresses to `data/` for maintainability.
*/

const locations = [
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
  { name: "Tên cơ sở" },
];

export default function LocationsSection() {
  return (
    <section className="bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Hệ thống cơ sở trên toàn quốc
          </h2>
          <div className="text-lg text-gray-700 font-medium">
            <span className="font-bold text-blue-700">15+ cơ sở</span> tại HCM,
            HN và ĐN
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-4/3 bg-gray-200 rounded-lg mb-3" />
              <div className="text-base font-semibold text-gray-800 text-center">
                {loc.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className="bg-blue-700 px-8 py-3 rounded"
          >
            Xem tất cả cơ sở
          </button>
        </div>
      </div>
    </section>
  );
}
