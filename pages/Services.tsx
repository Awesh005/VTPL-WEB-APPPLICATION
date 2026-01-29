
import React from 'react';
import { 
  Network, Camera, Monitor, Settings, 
  ShoppingCart, Zap, FileSearch, ShieldAlert
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#0B1F3A] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Core Solutions</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
            Industrial-grade technology services designed for government tenders and enterprise infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <ServiceDetail 
            icon={<Network className="w-12 h-12" />}
            title="IT Infrastructure Solutions"
            tagline="Enterprise Connectivity"
            description="End-to-end networking design and deployment. We build the physical and digital foundations for high-traffic environments."
            features={[
              "Campus-wide LAN/WAN Networking",
              "Structured Fiber Optic Cabling",
              "Server Management & Storage",
              "Enterprise WiFi Solutions"
            ]}
            useCase="Critical for administrative headquarters, hospitals, and educational institutions."
            img="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
            reverse={false}
          />

          <ServiceDetail 
            icon={<Camera className="w-12 h-12" />}
            title="Security & Surveillance"
            tagline="Proactive Protection"
            description="Integrated safety systems using advanced thermal, night-vision, and AI-enabled monitoring technology."
            features={[
              "IP-based CCTV Surveillance",
              "Integrated Command Centers",
              "Biometric Access Controls",
              "Perimeter Safety Alerts"
            ]}
            useCase="Trusted by PSUs and government departments for high-security premises."
            img="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
            reverse={true}
          />

          <ServiceDetail 
            icon={<Monitor className="w-12 h-12" />}
            title="Hardware & Interactive Panels"
            tagline="Advanced Supply Chain"
            description="Direct supply of high-performance hardware from leading global OEMs with full warranty and support."
            features={[
              "Workstations & Desktops",
              "Interactive Flat Panels (IFP)",
              "Digital Signage & LED Displays",
              "Commercial Printing Solutions"
            ]}
            useCase="Modernizing smart classrooms and corporate meeting spaces across India."
            img="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
            reverse={false}
          />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-slate-50 border-t border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="accent-bg w-16 h-16 rounded-md flex items-center justify-center text-white mb-8">
                  <Settings size={32} />
                </div>
                <h2 className="text-3xl font-bold navy-text mb-6">AMC & Managed Support</h2>
                <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                  We provide comprehensive Annual Maintenance Contracts (AMC) to ensure the longevity and reliability of your infrastructure.
                </p>
                <div className="space-y-6">
                  <SupportItem icon={<Zap size={20} />} label="24/7 Technical Response" />
                  <SupportItem icon={<ShieldAlert size={20} />} label="Preventive Maintenance Protocols" />
                  <SupportItem icon={<FileSearch size={20} />} label="Detailed Asset Auditing" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" className="rounded-xl shadow-lg mt-10" alt="Tech Support" />
                 <img src="https://images.unsplash.com/photo-1573161158521-8032515654d8?auto=format&fit=crop&q=80&w=400" className="rounded-xl shadow-lg -mt-10" alt="Networking" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceDetail: React.FC<{
  icon: React.ReactNode, title: string, tagline: string, description: string, features: string[], useCase: string, img: string, reverse: boolean
}> = ({icon, title, tagline, description, features, useCase, img, reverse}) => (
  <div className={`flex flex-col lg:flex-row items-center gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-8">
      <div className="text-blue-600 transition-transform hover:scale-105 duration-300">{icon}</div>
      <div>
        <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">{tagline}</span>
        <h3 className="text-3xl font-bold navy-text mt-3">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
        {features.map(f => (
          <li key={f} className="flex items-center text-sm text-navy-text font-bold">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 shadow-sm"></div>
            {f}
          </li>
        ))}
      </ul>
      <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Target Sectors</p>
        <p className="text-sm text-navy-text font-medium italic">"{useCase}"</p>
      </div>
    </div>
    <div className="flex-1 w-full">
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-grey">
        <img src={img} alt={title} className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
  </div>
);

const SupportItem: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
  <div className="flex items-center space-x-4 text-navy-text">
    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">{icon}</div>
    <span className="font-bold">{label}</span>
  </div>
);

export default Services;