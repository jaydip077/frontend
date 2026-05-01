import React from 'react'
import Banana from "./images/robusta banana.avif"

export default function Maincontent() {
  return (
    <>
        <>
  {/* Main Content */}
  <main className="w-full lg:max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12 pb-20">
    {/* Section: Hot Deals */}
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Hot deals
        </h2>
        <a
          href="#"
          className="text-base font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          See All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto hide-scroll pb-4 px-1">
        {/* Card 1: Sunflower Oil */}
        <div className="min-w-[180px] w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0PwKJyRTnCZJ_7eX865mkg9dqXJxVOPmLpuEFIZmxFW7TuGswmzsiCpVF_BluvO5yjEeL-Sb914fpj3LcKSopfewAMmzTvZCFeK5yHGBHAaFwgR5AiLKWSA"
              alt="Sunflower Oil"
              className="h-40 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            {/* Add Button */}
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Sunpure Refined Sunflower Oil
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              1 ltr{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  18% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹155</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹190
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2: Eggs */}
        <div className="min-w-[140px] sm:min-w-[180px] sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/17/26555ff2-5564-4c6c-ba6b-2c2a7cb5a107_Z14YBOL4CM_MN_17122025.png"
              alt="Eggs"
              className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Fresh Eggs - Fresh Export Eggs Pack
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              30 Pieces
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  15% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹255</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹300
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3: Curd */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/323eaf43-633a-42aa-af31-90458e38e28d_ADAPHQI84A_MN_16122025.png"
              alt="Curd"
              className="h-36 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Nandini Curd
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              500 g
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4: Gold Winner Oil */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrvtR7CtNOZXEawOpbtDbIP8AqteD1uTBu0aN2PCgMrwO81MxKn4AI8CpseaT6aKJ692d-nYbsw9qcmoIIR2lQWSIsdkxyo4WqcIrFeY3a_qHNKP9uSsgr"
              alt="Oil"
              className="h-40 object-contain mix-blend-multiply hue-rotate-15 group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Gold Winner Refined Sunflower Oil
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              1 ltr{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  15% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹156</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹185
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5: Lays */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/8/1/2f9d6d96-f2a5-4105-8ba6-d62ea2139213_5445_1.png"
              alt="Chips"
              className="h-36 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Lay's Potato Chips - American Style...
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              48 g{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6: Green Chilli */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
            <img
              src="https://fruitboxco.com/cdn/shop/products/VG-CL-20_800x.jpg?v=1588920882 "
              alt="Chilli"
              className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Green Chilli (Hasiru Menasinakaayi)
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              100 g{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  20% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹16</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹20
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 7: Onion */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/8/1/2f9d6d96-f2a5-4105-8ba6-d62ea2139213_5445_1.png"
              alt="Onion"
              className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Onion (Eerulli)
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              1 kg{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  19% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹41</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹51
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 8: Banana */}
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src={Banana}
              alt="Banana"
              className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Robusta Banana (Baalehannu)
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              4 pieces{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  20% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹35</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹44
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-40 sm:min-w-[180px]  sm:w-[180px] flex flex-col group cursor-pointer">
          <div className="relative h-[200px] w-full bg-white rounded-2xl flex items-center justify-center mb-3">
            <img
              src={Banana}
              alt="Banana"
              className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-2 right-2 bg-white border border-blue-600 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-3 bg-gray-100/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>{" "}
                7 MINS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 h-10">
              Robusta Banana (Baalehannu)
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium cursor-pointer hover:text-gray-700">
              4 pieces{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-green-600 uppercase">
                  20% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">₹35</span>
                  <span className="text-xs text-gray-400 line-through decoration-1">
                    ₹44
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Grocery & Kitchen */}
    <section>
      <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
        Grocery &amp; Kitchen
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
        {/* Category 1 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200"
              alt="Veg"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Fresh Vegetables
          </span>
        </div>
        {/* Category 2 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200"
              alt="Fruits"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Fresh Fruits
          </span>
        </div>
        {/* Category 3 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200"
              alt="Dairy"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Dairy, Bread and Eggs
          </span>
        </div>
        {/* Category 4 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=200"
              alt="Cereals"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Cereals and Breakfast
          </span>
        </div>
        {/* Category 5 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200"
              alt="Atta"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Atta, Rice and Dal
          </span>
        </div>
        {/* Category 6 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=200"
              alt="Oils"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Oils and Ghee
          </span>
        </div>
        {/* Category 7 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=200"
              alt="Masalas"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Masalas
          </span>
        </div>
        {/* Category 8 */}
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-blue-50/50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-100/50 transition-colors">
            <img
              src="https://www.jiomart.com/images/product/original/rvycjdcejg/freshtige-mixed-dry-fruit-and-nut-mix-1kg-13-seeds-dry-fruits-healthy-daily-bites-trail-mix-product-images-orvycjdcejg-p602342199-0-202306120902.jpg?im=Resize=(420,420)"
              alt="Dry Fruits"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs lg:text-sm font-bold text-gray-700 text-center leading-tight">
            Dry Fruits and Seeds Mix
          </span>
        </div>
      </div>
    </section>
  </main>
</>

    </>
  )
}

