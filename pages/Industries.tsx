
import React from 'react';
import { Building, Landmark, GraduationCap, Briefcase } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <div className="bg-white">
        {/* ================= HERO ================= */}
        <section className="relative h-[240px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src="/images/P.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/95 via-[#0b2545]/85 to-[#0b2545]/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Our Focus Sectors
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
          We specialize in industries where security, reliability, and regulatory compliance are paramount.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <IndustryItem 
              icon={<Landmark size={40} />}
              title="Government Departments"
              desc="Direct suppliers to various State and Central government ministries for high-end surveillance and infrastructure projects."
              points={["Municipal Corporations", "Secretariats", "Public Infrastructure Sites"]}
              img="https://picsum.photos/id/122/600/400"
            />

            <IndustryItem 
              icon={<Briefcase size={40} />}
              title="PSU & Semi-Govt Bodies"
              desc="Partnering with Public Sector Undertakings for specialized security solutions and technical hardware procurement."
              points={["Oil & Gas Units", "Banking Institutions", "Railway Zones"]}
              img="https://picsum.photos/id/180/600/400"
            />

            <IndustryItem 
              icon={<Building size={40} />}
              title="Corporate & Enterprise"
              desc="Scalable IT infrastructure and networking for multi-national corporations and established Indian businesses."
              points={["IT Parks", "Manufacturing Hubs", "Corporate HQs"]}
              img="https://picsum.photos/id/20/600/400"
            />

            <IndustryItem 
              icon={<GraduationCap size={40} />}
              title="Educational Institutions"
              desc="Modernizing the learning environment with smart boards, high-speed WiFi, and campus safety monitoring."
              points={["Universities", "Technological Institutes", "K-12 Smart Schools"]}
              img="https://picsum.photos/id/24/600/400"
            />

          </div>
        </div>
      </section>
    </div>
  );
};

const IndustryItem: React.FC<{icon: React.ReactNode, title: string, desc: string, points: string[], img: string}> = ({icon, title, desc, points, img}) => (
  <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
    <div className="h-64 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-8 space-y-4">
      <div className="accent-blue mb-2">{icon}</div>
      <h3 className="text-2xl font-bold navy-text">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
      <div className="pt-4 space-y-2">
        {points.map(p => (
          <div key={p} className="flex items-center text-sm font-semibold text-slate-700">
            <div className="w-2 h-2 accent-bg rounded-full mr-3"></div>
            {p}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Industries;
