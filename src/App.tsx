/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageSquare, 
  School, 
  ShoppingBag, 
  Hospital, 
  Trees,
  Map as MapIcon,
  Maximize,
  Minimize,
  Eye,
  CheckCircle2,
  CalendarDays,
  LayoutDashboard,
  HelpCircle,
  Camera,
  ExternalLink
} from 'lucide-react';
import { ECOHOME_DATA, CONTACT_INFO, FAQ_DATA, ProjectSection, Apartment } from './constants';

const ListingCard = ({ listing }: { listing: Apartment; key?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex justify-between items-center group hover:border-brand-primary hover:shadow-md transition-all"
  >
    <div className="flex-1">
      <a 
        href="https://www.facebook.com/marketplace/profile/100007534817602/"
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <h4 className="font-bold text-brand-dark uppercase text-sm mb-1 group-hover:text-brand-primary transition-colors flex items-center gap-2">
          {listing.title}
          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
      </a>
      <p className="text-slate-500 text-xs leading-tight">
        {listing.details}
      </p>
    </div>
    <div className="text-right ml-4 shrink-0">
      <span className="text-lg font-bold text-brand-primary block">
        {listing.price}
      </span>
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(ECOHOME_DATA[0].id);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const activeProject = ECOHOME_DATA.find(p => p.id === activeTab) || ECOHOME_DATA[0];

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {/* Header Navigation */}
      <nav className="bg-white text-slate-900 px-6 h-16 flex justify-between items-center border-b border-slate-200 shadow-sm shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-30 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-brand-primary/20 tracking-tighter">
            ECOHOME
          </div>
        
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-1">Tư vấn trực tiếp</span>
            <span className="text-brand-primary font-bold">{CONTACT_INFO.name}: {CONTACT_INFO.phone}</span>
          </div>
          <div className="flex gap-2">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-900 px-4 py-2 rounded-md font-bold text-xs transition-all flex items-center gap-2 border border-slate-200"
            >
              <Phone size={14} />
              GỌI NGAY
            </a>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 shrink-0 overflow-y-auto hidden lg:flex">
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 leading-tight mb-2 uppercase tracking-tight">
              DỰ ÁN ECOHOME <span className="text-brand-primary">1-2-3</span>
            </h1>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-brand-primary" />
              Bắc Từ Liêm, Hà Nội
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase mb-2 font-bold tracking-wider">Hỗ trợ nhanh</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-bold text-sm text-slate-900">{CONTACT_INFO.name}</p>
                  <p className="text-lg font-bold text-brand-primary">{CONTACT_INFO.phone}</p>
                </div>
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <CalendarDays size={20} />
                </div>
              </div>
              <img 
                src="/kongvan.png" 
                alt="Profile" 
                className="w-full h-auto rounded-xl border border-slate-100 shadow-sm"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">Tiện ích đẳng cấp</h3>
            <div className="grid gap-3">
              {[
                { icon: Trees, text: "Đa tiện ích nội khu" },
                { icon: ShoppingBag, text: "Gần chợ Vẽ - chợ Tân Xuân" },
                { icon: Hospital, text: "Gần BV Nam Thăng Long, BV Phương Đông" },
                { icon: School, text: "Trường học các cấp ngay nội khu" },
                { icon: MessageSquare, text: "Phù hợp gia đình trẻ ở lâu dài" }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="shrink-0 w-6 h-6 bg-emerald-50 rounded flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <item.icon size={12} />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} className="text-brand-primary" />
                <span className="text-xs font-bold text-slate-700 uppercase">Pháp lý minh bạch</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Sổ hồng sang tên ngay hoặc cam kết lộ trình cho từng căn.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-6 md:p-8 gap-6 overflow-hidden">
          {/* Tabs */}
          <div className="flex gap-2 bg-white p-1.5 rounded-xl self-start shadow-sm border border-slate-200">
            {ECOHOME_DATA.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                  activeTab === project.id 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                {project.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
            {/* Visuals */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-2">
              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 group transition-all duration-300 ${isFullScreen ? 'fixed inset-0 z-[100] m-0 rounded-none' : 'relative'}`}>
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-tight flex items-center gap-2">
                    <Eye size={16} className="text-brand-primary" />
                    Trải nghiệm 360° {activeProject.name}
                  </span>
                  <button 
                    onClick={toggleFullScreen}
                    className="p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-600 flex items-center gap-2 text-[10px] font-bold uppercase"
                    title={isFullScreen ? "Thu nhỏ" : "Xem toàn màn hình"}
                  >
                    {isFullScreen ? (
                      <>
                        <Minimize size={14} />
                        Thoát
                      </>
                    ) : (
                      <>
                        <Maximize size={14} />
                        Toàn màn hình
                      </>
                    )}
                  </button>
                </div>
                <div className={`relative ${isFullScreen ? 'h-[calc(100vh-53px)]' : ''}`}>
                  <iframe 
                    src={activeProject.vtourUrl} 
                    className={`w-full border-0 ${isFullScreen ? 'h-full' : 'aspect-video-360'}`}
                    title={`360 Tour ${activeProject.name}`}
                    allow="accelerometer; gyroscope; magnetometer"
                  />
                </div>
              </div>

              {!isFullScreen && (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 group">
                  <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-xs uppercase tracking-tight flex items-center gap-2">
                      <MapIcon size={16} className="text-brand-primary" />
                      Vị trí thực tế trên bản đồ
                    </span>
                  </div>
                  <div className="relative">
                    <iframe 
                      src={activeProject.mapUrl} 
                      className="w-full aspect-video-360 border-0"
                      allowFullScreen
                      loading="lazy"
                      title={`Map ${activeProject.name}`}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Listings */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <LayoutDashboard size={16} className="text-brand-primary" />
                    Quỹ căn đang chào bán
                  </h2>
                  <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">LIVE UPDATE</span>
                </div>
                <div className="space-y-3">
                  {activeProject.listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>

                <motion.a
                  href="https://www.facebook.com/marketplace/profile/100007534817602/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 bg-gradient-to-br from-brand-primary via-red-600 to-orange-600 p-5 rounded-2xl shadow-xl shadow-brand-primary/20 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                      <Camera size={26} />
                    </div>
                    <div>
                      <p className="font-extrabold text-lg leading-none tracking-tight">XEM HÌNH ẢNH TỪNG CĂN</p>
                      <div className="flex items-center gap-1.5 mt-1.5 opacity-90">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <p className="text-[10px] uppercase font-bold tracking-widest">Cập nhật ảnh thực tế 24/7</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 p-2.5 rounded-xl text-white group-hover:bg-white group-hover:text-brand-primary transition-all shadow-inner">
                    <ExternalLink size={20} />
                  </div>
                </motion.a>
              </div>

              {/* Location/Boundaries */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-primary" />
                  Vị trí & Quy hoạch
                </h2>
                
                {activeProject.boundaries ? (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(activeProject.boundaries).map(([key, value]) => (
                      <div key={key} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-brand-primary uppercase mb-1">
                          {key === 'north' ? 'Phía Bắc' : key === 'east' ? 'Phía Đông' : key === 'west' ? 'Phía Tây' : 'Phía Nam'}
                        </p>
                        <p className="text-xs text-slate-600 leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>
                ) : activeProject.nearby ? (
                  <div className="grid gap-2 mb-6">
                    {activeProject.nearby.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-md">
                        <CheckCircle2 size={12} className="text-brand-secondary" />
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="bg-white text-slate-900 rounded-xl p-4 shadow-sm border border-slate-100">
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-1 tracking-wider">Quy hoạch chi tiết</p>
                    <p className="text-lg font-bold text-brand-primary">Tỉ lệ 1/500</p>
                  </div>
                  <div className="bg-white text-slate-900 rounded-xl p-4 border border-slate-100 shadow-sm">
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-1 tracking-wider">Dân gian quen gọi</p>
                    <p className="text-lg font-bold italic text-slate-800">Bắc Cổ Nhuế</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">CÁC CÂU HỎI THƯỜNG GẶP</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Giải đáp thắc mắc về EcoHome 1-2-3</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {FAQ_DATA.map((item, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-0 md:pb-6">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center text-[10px] mt-0.5">Q</span>
                      {item.question}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed pl-8">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0 z-50">
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ECOHOME 1: ĐÃ BÀN GIAO</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ECOHOME 2: SỔ HỒNG SANG TÊN</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ECOHOME 3: SỔ HỒNG TÙY CĂN</span>
          </div>
        </div>
        <div className="text-[11px] text-slate-400 font-medium">
          © 2024 EcoHome Panorama • Tư vấn: MR Văn ({CONTACT_INFO.phone})
        </div>
      </footer>
    </div>
  );
}
