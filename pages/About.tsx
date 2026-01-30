import React from "react";
import { Target, Eye, Users, ShieldCheck, Landmark, Quote } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About the Company
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl">
            Established in 2019, Vikash Techsec Private Limited is an
            Indian-registered private limited company focusing on large-scale
            technology deployments and security excellence.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold navy-text">
                Registration & Profile
              </h2>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-slate-700 italic">
                  "Registered under the Companies Act in India, we take pride in
                  our robust financial compliance and ethical business
                  practices."
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Vikash Techsec Private Limited (CIN: U74999BR2019PTC043689) was incorporated with the vision of providing state-of-the-art security and IT solutions. Since its founding on October 11, 2019 , the company’s headquarters and operational center have been located in <strong>Ranchi, Jharkhand</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To better serve the Eastern Indian region, we maintain an office
                in <strong>Patna, Bihar</strong> and a strategic administrative
                hub in <strong>Kolkata, West Bengal</strong>. We have navigated
                complex government tenders and enterprise contracts with a focus
                on quality and integrity.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-bold text-3xl accent-blue">2019</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">
                    Founded Year
                  </p>
                </div>
                <div>
  <h4 className="font-bold text-3xl accent-blue">Ranchi</h4>
  <p className="text-sm text-slate-500 tracking-widest font-medium">
    Headquarter
  </p>
</div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Professional Corporate Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="accent-blue text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl font-bold navy-text">
              Message from our Director
            </h2>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/3 lg:w-1/4 relative min-h-[400px]">
              <img
                src="/images/founder1.png"
                alt="Suraj Seth - Director"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-bold">Suraj Seth</h4>
                  <p className="text-blue-400 font-medium uppercase tracking-widest text-xs">
                    Director
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 lg:w-3/4 p-12 flex flex-col justify-center relative">
              <Quote className="absolute top-10 right-10 text-slate-100 w-32 h-32 -z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold navy-text mb-6">
                  "Innovation Meets Integrity"
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Welcome to Vikash Techsec Pvt. Ltd., where innovation meets
                  integrity. Under my leadership, we are committed to delivering
                  cutting-edge solutions with uncompromised quality. Our journey
                  is defined by the trust our clients place in us and our
                  unwavering commitment to technical excellence and national
                  growth.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-0.5 accent-bg"></div>
                  <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">
                    Suraj Seth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-12 rounded-2xl border border-white/10">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower Indian organizations with resilient technology
                infrastructures and advanced security systems that foster
                safety, productivity, and growth. We aim to be the first choice
                for government and corporate procurement through uncompromised
                quality and service excellence.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-2xl border border-white/10">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become a leading technology conglomerate in India known for
                integrating innovative tech-sec solutions, driving digital
                transformation in the public sector, and maintaining the highest
                standards of corporate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold navy-text mb-4">
              The Pillars of Our Success
            </h2>
            <p className="text-slate-600">
              Guided by principles that ensure long-term trust and client
              satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<ShieldCheck className="accent-blue" />}
              title="Integrity"
              desc="Absolute honesty in every tender and contract execution."
            />
            <ValueCard
              icon={<Landmark className="accent-blue" />}
              title="Compliance"
              desc="Full adherence to GST, ROC, and GeM regulatory norms."
            />
            <ValueCard
              icon={<Users className="accent-blue" />}
              title="Customer Focus"
              desc="Tailoring technology to solve specific client problems."
            />
            <ValueCard
              icon={<ShieldCheck className="accent-blue" />}
              title="Quality Control"
              desc="Strict OEM selection to ensure hardware longevity."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* =======================
   UPDATED VALUE CARD
   ======================= */
   const ValueCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    desc: string;
  }> = ({ icon, title, desc }) => (
    <div
      className="
        bg-slate-50 p-8 rounded-xl text-center
        border border-slate-200
        hover:border-blue-600
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        transition-all duration-300
        relative overflow-hidden group
      "
    >
      {/* Icon */}
      <div className="flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <div className="p-4 bg-white rounded-full shadow-sm">
          {React.cloneElement(icon as any, { size: 32 })}
        </div>
      </div>
  
      {/* Title */}
      <h4 className="text-xl font-bold navy-text mb-3">{title}</h4>
  
      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  
      {/* Bottom Gradient Border (same as ServiceCard) */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-1
          bg-gradient-to-r from-green-400 via-purple-400 to-blue-500
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />
    </div>
  );
  
  export default About;
  
