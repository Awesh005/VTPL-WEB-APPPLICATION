import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Laptop,
  Layout,
  Printer,
  Cpu,
  MonitorPlay,
  BatteryCharging,
  ArrowRight,
  Video,
  Projector,
  Scan,
  Mic,
  Camera,
  Tv,
  Wind,
  X,
} from "lucide-react";

/* ================= TYPES ================= */

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

/* ================= PRODUCT LIST ================= */

const productList: Product[] = [
  {
    id: "interactive-panel",
    name: "Interactive Panels with CPU",
    description:
      "Smart interactive touch panels with integrated CPU for classrooms and boardrooms.",
    icon: <MonitorPlay size={26} />,
    image: "/images/interactive.webp",
  },
  {
    id: "ups-line",
    name: "Line Interactive UPS with AVR (V2)",
    description:
      "Reliable UPS with AVR protection for office and institutional systems.",
    icon: <BatteryCharging size={26} />,
    image: "/images/ups.jpeg",
  },
  {
    id: "ups-online",
    name: "Online UPS (V2)",
    description:
      "True online UPS for mission-critical enterprise environments.",
    icon: <BatteryCharging size={26} />,
    image: "/images/online ups.webp",
  },
  {
    id: "lectern",
    name: "Electronic Lectern",
    description:
      "Digital lecterns with AV and control integration for smart presentations.",
    icon: <Layout size={26} />,
    image: "/images/lec.jpg",
  },
  {
    id: "aio-pc",
    name: "All in One PC (V2)",
    description:
      "Space-saving all-in-one computers with enterprise-grade performance.",
    icon: <Layout size={26} />,
    image: "/images/aio.webp",
  },
  {
    id: "laptop-entry",
    name: "Entry & Mid Level Laptop – Notebook",
    description:
      "Cost-effective laptops for offices, education and government use.",
    icon: <Laptop size={26} />,
    image: "/images/entry lap.avif",
  },
  {
    id: "desktop-entry",
    name: "Entry & Mid Level Desktop Computer",
    description:
      "Reliable desktop systems for everyday office productivity.",
    icon: <Monitor size={26} />,
    image: "/images/dek.jpg",
  },
  {
    id: "desktop-high",
    name: "High End Desktop Computer",
    description:
      "Powerful desktops for engineering, analytics and design workloads.",
    icon: <Cpu size={26} />,
    image: "/images/heigh desk.webp",
  },
  {
    id: "vc-endpoint",
    name: "Video Conferencing End Point",
    description:
      "Enterprise-grade video conferencing systems for boardrooms.",
    icon: <Video size={26} />,
    image: "/images/v cam.avif",
  },
  {
    id: "projector",
    name: "Multimedia Projector (MMP)",
    description:
      "High-brightness projectors for classrooms and auditoriums.",
    icon: <Projector size={26} />,
    image: "/images/proj.jpg",
  },
  {
    id: "scanner",
    name: "Scanner (V3)",
    description:
      "High-speed document scanners for digitization projects.",
    icon: <Scan size={26} />,
    image: "/images/sca.jpg",
  },
  {
    id: "laptop-high",
    name: "High End Laptop – Notebook",
    description:
      "Premium laptops for executives and power users.",
    icon: <Laptop size={26} />,
    image: "/images/hlp.jpg",
  },
  {
    id: "large-display",
    name: "Professional Large Format Display",
    description:
      "Commercial-grade displays for signage and control rooms.",
    icon: <Monitor size={26} />,
    image: "/images/lfd.jpg",
  },
  {
    id: "speakerphone",
    name: "Speakerphone",
    description:
      "Conference speakerphones with crystal-clear audio.",
    icon: <Mic size={26} />,
    image: "/images/speakerphones.webp",
  },
  {
    id: "vc-camera",
    name: "Web Camera",
    description:
      "HD cameras for video conferencing and virtual meetings.",
    icon: <Camera size={26} />,
    image: "/images/web cam.jpg",
  },
  {
    id: "printer",
    name: "Printer",
    description:
      "Enterprise printers for high-volume office printing.",
    icon: <Printer size={26} />,
    image: "/images/printer.webp",
  },
  {
    id: "mfm",
    name: "Multifunction Machine",
    description:
      "All-in-one print, scan, copy and fax solutions.",
    icon: <Printer size={26} />,
    image: "/images/mul.jpg",
  },
  {
    id: "tv",
    name: "Television",
    description:
      "Commercial and consumer TVs for institutions and offices.",
    icon: <Tv size={26} />,
    image: "/images/tel.webp",
  },
  {
    id: "ac",
    name: "Split Air Conditioner",
    description:
      "Energy-efficient split AC systems for office environments.",
    icon: <Wind size={26} />,
    image: "/images/ac.webp",
  },
];

/* ================= PAGE ================= */

const Products: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[240px] flex items-center">
        <img
          src="/images/P.jpg"
          alt="Products Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/95 via-[#0b2545]/85 to-[#0b2545]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Equipment Catalogue
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl">
            Comprehensive enterprise IT, AV & infrastructure solutions.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={setActiveImage}
            />
          ))}
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white"
              onClick={() => setActiveImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={activeImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-xl bg-white p-4"
            />
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0B1F3A] rounded-3xl p-14 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="text-white mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Bulk Procurement & Tenders
              </h2>
              <p className="text-slate-400 max-w-xl">
                Government, PSU & enterprise bulk supply with compliance support.
              </p>
            </div>
            <Link
              to="/contact"
              className="accent-bg px-10 py-4 rounded-md font-bold text-white flex items-center"
            >
              Get Quote
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= CARD ================= */

const ProductCard: React.FC<{
  product: Product;
  onImageClick: (img: string) => void;
}> = ({ product, onImageClick }) => {
  return (
    <div className="bg-white rounded-3xl border hover:shadow-2xl transition-all hover:-translate-y-2">
      <div
        className="relative h-56 bg-slate-100 flex items-center justify-center cursor-zoom-in"
        onClick={() => onImageClick(product.image)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain p-6"
        />
        <div className="absolute top-4 right-4 bg-white p-3 rounded-xl text-blue-600 shadow-lg">
          {product.icon}
        </div>
      </div>

      <div className="p-8 flex flex-col">
        <h3 className="text-lg font-bold mb-3">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-6">
          {product.description}
        </p>

        <Link
          to="/contact"
          state={{ productInquiry: product.name }}
          className="mt-auto text-center py-3 text-sm font-bold rounded-md border hover:bg-blue-600 hover:text-white transition"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default Products;
