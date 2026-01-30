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
                Vikash Techsec Private Limited (CIN: U74999BR2019PTC043689) was
                incorporated with a vision to provide state-of-the-art security
                and IT solutions. Since our founding on October 11, 2019, our{" "}
                <strong>Main Branch</strong> is situated in{" "}
                <strong>Ranchi, Jharkhand</strong>.
              </p>

              <p className="text-slate-600 leading-relaxed">
                We maintain an office in <strong>Patna, Bihar</strong> and a
                strategic administrative hub in{" "}
                <strong>Kolkata, West Bengal</strong>, serving government and
                enterprise clients across Eastern India.
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
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">
                    Main Branch
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Corporate office environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="accent-blue text-sm font-bold uppercase tracking-[0.2em] block mb-4">
              Leadership
            </span>
            <h2 className="text-3xl font-bold navy-text">
              Message from our Director
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3 lg:w-1/4 relative min-h-[420px]">
              <img
                src="/images/founder1.png"
                alt="Suraj Seth, Director of Vikash Techsec"
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
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

            <div className="md:w-2/3 lg:w-3/4 p-12 relative">
              <Quote className="absolute top-10 right-10 text-slate-100 w-32 h-32" />
              <h3 className="text-2xl font-bold navy-text mb-6 relative z-10">
                "Innovation Meets Integrity"
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                Under my leadership, we are committed to delivering cutting-edge
                solutions with uncompromised quality. Our journey is defined by
                trust, technical excellence, and contribution to national
                growth.
              </p>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-0.5 accent-bg"></div>
                <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">
                  Suraj Seth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InfoCard icon={<Target />} title="Our Mission" />
            <InfoCard icon={<Eye />} title="Our Vision" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<ShieldCheck />} title="Integrity" desc="Honest execution of every contract." />
            <ValueCard icon={<Landmark />} title="Compliance" desc="Strict adherence to all statutory norms." />
            <ValueCard icon={<Users />} title="Customer Focus" desc="Solutions tailored to client needs." />
            <ValueCard icon={<ShieldCheck />} title="Quality Control" desc="OEM-approved hardware and systems." />
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title }: any) => (
  <div className="bg-white/5 p-12 rounded-2xl border border-white/10">
    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-8">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
  </div>
);

const ValueCard = ({ icon, title, desc }: any) => (
  <div className="p-8 text-center bg-slate-50 rounded-xl hover:shadow-lg transition-all">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-white rounded-full shadow-sm">
        {React.cloneElement(icon, { size: 32 })}
      </div>
    </div>
    <h4 className="text-xl font-bold navy-text mb-3">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

export default About;
