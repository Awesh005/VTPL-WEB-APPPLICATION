import React from 'react';
import {
  BadgeCheck,
  FileCheck,
  ShieldCheck,
  Landmark,
  ReceiptText,
} from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compliance & Certifications
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ensuring credibility and trust through full regulatory transparency and registration.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold navy-text">
                Tender-Ready & Reliable
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Vikash Techsec Private Limited is committed to the highest standards of corporate compliance in India.
              </p>

              <div className="space-y-6">
                <ComplianceBar icon={<BadgeCheck className="text-orange-500" />} title="GeM Registered" status="Verified Supplier" />
                <ComplianceBar icon={<ReceiptText className="text-orange-500" />} title="GST Registered" status="Fully Compliant" />
                <ComplianceBar icon={<Landmark className="text-orange-500" />} title="MCA Registered" status="Active Pvt Ltd Status" />
                <ComplianceBar icon={<ShieldCheck className="text-orange-500" />} title="PAN/TAN Registered" status="Business Verified" />
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="space-y-6">
                <InfoCard
                  icon={<FileCheck size={24} />}
                  title="GeM Portal Supplier"
                  desc="Actively listed on Government E-Marketplace (GeM)."
                />

                <InfoCard
                  icon={<Landmark size={24} />}
                  title="Incorporation Details"
                  desc="Registered under Companies Act, 2013 with ROC Patna."
                />

                <div className="p-10 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">
                    MSME / ISO Certificates
                  </p>
                  <p className="text-slate-500 text-xs italic">
                    Available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold navy-text text-center mb-16">
            Why Trust Vikash Techsec?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrustCard title="Verified Experience" desc="High-value projects since 2019." />
            <TrustCard title="Financial Stability" desc="Clean audit trail & consistent growth." />
            <TrustCard title="OEM Partnerships" desc="Authorized genuine hardware only." />
          </div>
        </div>
      </section>

      {/* MOVING CAROUSEL */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <h3 className="text-2xl font-bold navy-text text-center">
            Trusted By & OEM Partners
          </h3>
        </div>

        <MovingCarousel />
      </section>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const ComplianceBar = ({ icon, title, status }: any) => (
  <div className="flex items-center justify-between p-4 border-b border-slate-100">
    <div className="flex items-center space-x-4">
      {icon}
      <span className="font-bold navy-text">{title}</span>
    </div>
    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
      {status}
    </span>
  </div>
);

const TrustCard = ({ title, desc }: any) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
    <h4 className="font-bold navy-text mb-4">{title}</h4>
    <p className="text-slate-600 text-sm">{desc}</p>
  </div>
);

const InfoCard = ({ icon, title, desc }: any) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm border flex space-x-6">
    <div className="bg-orange-600 p-3 rounded-lg text-white">{icon}</div>
    <div>
      <h4 className="font-bold navy-text">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  </div>
);

/* ---------------- SEAMLESS MARQUEE ---------------- */

const logos = [
  '/images/acer.png',
  '/images/brother.png',
  '/images/cyberpower.png',
  '/images/epson.png',
  '/images/lg.png',
  '/images/PeopleLink.png',
  '/images/promark.png',
  '/images/solitire.png',
  '/images/zakai.png',
  '/images/bpe.jfif',
  '/images/hlbs.jfif',
];

const MovingCarousel: React.FC = () => {
  const items = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((logo, index) => (
          <div
            key={index}
            className="mx-12 h-16 w-40 bg-center bg-no-repeat bg-contain opacity-80 hover:opacity-100 transition"
            style={{ backgroundImage: `url(${logo})` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Compliance;
