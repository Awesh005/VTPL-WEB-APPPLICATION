
import React from 'react';
import { BadgeCheck, FileCheck, ShieldCheck, Landmark, ReceiptText } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance & Certifications</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ensuring credibility and trust through full regulatory transparency and registration.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold navy-text">Tender-Ready & Reliable</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Vikash Techsec Private Limited is committed to the highest standards of corporate compliance in India. We maintain all necessary registrations required for participating in government tenders (GeM, State, and PSU) and serving enterprise clients.
              </p>
              
              <div className="space-y-6">
                <ComplianceBar icon={<BadgeCheck className="text-orange-500" />} title="GeM Registered" status="Verified Supplier" />
                <ComplianceBar icon={<ReceiptText className="text-orange-500" />} title="GST Registered" status="Fully Compliant" />
                <ComplianceBar icon={<Landmark className="text-orange-500" />} title="Ministry of Corporate Affairs" status="Active Pvt Ltd Status" />
                <ComplianceBar icon={<ShieldCheck className="text-orange-500" />} title="PAN/TAN Registered" status="Business Verified" />
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6">
                  <div className="bg-orange-600 p-3 rounded-lg text-white">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold navy-text text-lg">GeM Portal Supplier</h4>
                    <p className="text-slate-500 text-sm mt-1">We are actively listed on the Government E-Marketplace (GeM) for Direct Purchase and Bidding/RA processes.</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6">
                  <div className="bg-orange-600 p-3 rounded-lg text-white">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold navy-text text-lg">Incorporation Details</h4>
                    <p className="text-slate-500 text-sm mt-1">Registered under the Companies Act, 2013 with ROC Patna. Ensuring transparency in every transaction.</p>
                  </div>
                </div>

                <div className="p-10 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">MSME / ISO Certificates</p>
                  <p className="text-slate-500 text-xs italic">Available upon request for specific tender requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold navy-text text-center mb-16">Why Trust Vikash Techsec?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrustCard 
              title="Verified Experience" 
              desc="Proven track record in executing high-value projects since 2019." 
            />
            <TrustCard 
              title="Financial Stability" 
              desc="Clean audit trail and consistent growth as a Private Limited entity." 
            />
            <TrustCard 
              title="OEM Partnerships" 
              desc="Only authorized genuine hardware from world-class tech manufacturers." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ComplianceBar: React.FC<{icon: React.ReactNode, title: string, status: string}> = ({icon, title, status}) => (
  <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
    <div className="flex items-center space-x-4">
      {icon}
      <span className="font-bold navy-text">{title}</span>
    </div>
    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-tighter">{status}</span>
  </div>
);

const TrustCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
    <h4 className="text-lg font-bold navy-text mb-4">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Compliance;