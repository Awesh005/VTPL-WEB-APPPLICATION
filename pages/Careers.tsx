
import React from 'react';
import { ArrowRight, Mail, Briefcase, Info } from 'lucide-react';

const Careers: React.FC = () => {
  const positions = [
    "Bidding Executive",
    "Accountant",
    "Salesperson",
    "Front Office Executive",
    "Product Line Expert"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
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
          Join Our Team
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
          Help us shape the future of technology and security in India. We are looking for driven professionals to join our growing offices.
          </p>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold navy-text mb-10 text-center">Open Opportunities</h2>
          <div className="space-y-4">
            {positions.map((role, index) => (
              <div 
                key={index} 
                className="accent-bg text-white px-10 py-6 rounded-md shadow-md hover:shadow-xl hover:translate-x-2 transition-all cursor-pointer flex items-center justify-between group"
              >
                <span className="text-xl font-bold tracking-tight">{role}</span>
                <div className="bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-20 bg-white border-y border-grey">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 rounded-2xl p-10 md:p-16 border border-grey flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 md:mr-10 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 text-blue-600 font-bold mb-4">
                <Info size={20} />
                <span className="uppercase tracking-widest text-xs">Direct Application</span>
              </div>
              <h2 className="text-3xl font-bold navy-text mb-4">Send Your CV</h2>
              <p className="text-slate-600 font-medium">
                Not finding a role that fits? Send us your resume anyway. We are always hiring talent for Ranchi, Patna, and Kolkata offices.
              </p>
            </div>
            
            <a 
              href="mailto:hr@vtpl.org.in" 
              className="navy-bg text-white px-12 py-5 rounded-md font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center shrink-0"
            >
              <Mail className="mr-3 w-5 h-5" />
              Email Resume
            </a>
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.25em]">
            Operational Hubs: Ranchi • Patna • Kolkata
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;