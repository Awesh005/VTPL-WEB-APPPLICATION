import React from "react";
import {
  Building,
  Landmark,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const Industries: React.FC = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[260px] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src="/images/P.jpg"
          alt="Industries Banner"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/95 via-[#0b2545]/85 to-[#0b2545]/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Focus Sectors
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
            We operate in mission-critical industries where security,
            reliability, and compliance are non-negotiable.
          </p>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <IndustryItem
              icon={<Landmark size={38} />}
              title="Government Departments"
              desc="Trusted technology partner to State and Central government bodies for surveillance, networking, and infrastructure execution."
              points={[
                "Municipal Corporations",
                "Secretariats",
                "Public Infrastructure Sites",
              ]}
              img="/images/new.jpg"
            />

            <IndustryItem
              icon={<Briefcase size={38} />}
              title="PSU & Semi-Govt Bodies"
              desc="Delivering specialized security hardware and mission-critical solutions for Public Sector Undertakings."
              points={[
                "Oil & Gas Units",
                "Banking Institutions",
                "Railway Zones",
              ]}
              img="/images/psu.png"
            />

            <IndustryItem
              icon={<Building size={38} />}
              title="Corporate & Enterprise"
              desc="Scalable IT infrastructure, surveillance, and networking solutions for enterprises and large organizations."
              points={[
                "IT Parks",
                "Manufacturing Hubs",
                "Corporate Headquarters",
              ]}
              img="/images/f.jpeg"
            />

            <IndustryItem
              icon={<GraduationCap size={38} />}
              title="Educational Institutions"
              desc="Smart classrooms, campus surveillance, and digital infrastructure for modern education ecosystems."
              points={[
                "Universities",
                "Technical Institutes",
                "K-12 Smart Schools",
              ]}
              img="/images/st.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= CARD COMPONENT ================= */

const IndustryItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
  img: string;
}> = ({ icon, title, desc, points, img }) => (
  <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    
    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-8 space-y-4">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {desc}
      </p>

      {/* Points */}
      <div className="pt-4 space-y-2">
        {points.map((p) => (
          <div
            key={p}
            className="flex items-center text-sm font-semibold text-slate-700"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3" />
            {p}
          </div>
        ))}
      </div>

      {/* Hover CTA */}
      <div className="pt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
        Explore Sector <ArrowUpRight className="ml-2 w-4 h-4" />
      </div>
    </div>
  </div>
);

export default Industries;
