
import React from 'react';
// @ts-ignore - Suppressing named export errors from react-router-dom due to potential environment type mismatch
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Server, Laptop, 
  Award, CheckCircle, BarChart3, Building2,
  FileText
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-1000">
        <div className="absolute inset-0 z-0">
          <img 
            //src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            src="/images/b3.avif"
            alt="Corporate Tech" 
            className="w-full h-full object-cover opacity-20"
          />
         
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Reliability • Security • Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.15] mb-8">
            End-to-End IT Hardware & Technology Solutions Partner
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
            Delivering genuine IT hardware products, infrastructure services, and enterprise-grade technology solutions to Government, PSU, and corporate clients.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="accent-bg text-white px-10 py-4 rounded-md font-bold flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl group">
                Consult Our Experts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://share.google/Dvngq8qGq4iIke6Ym" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-md font-bold flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <FileText className="mr-2 w-5 h-5" />
                Company Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-[0.25em] mb-4 block">Our Legacy</span>
              <h2 className="text-3xl md:text-4xl font-bold navy-text mb-8">Building Resilient Digital Infrastructure since 2019</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Vikash Techsec Private Limited is a specialized technology firm focused on B2B solutions. We pride ourselves on being a dependable partner for large-scale government procurement and enterprise digital transformation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold navy-text">GeM Registered</h4>
                    <p className="text-sm text-slate-500 font-medium">Verified Government e-Marketplace supplier.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold navy-text">ISO & MSME</h4>
                    <p className="text-sm text-slate-500 font-medium">Committed to national quality standards.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-blue-600 font-bold flex items-center hover:underline group">
                Learn more about us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Operations" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 navy-bg text-white p-10 rounded-2xl z-20 shadow-2xl hidden md:block">
                <p className="text-5xl font-extrabold">05+</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-70">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-slate-50 border-y border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold navy-text mb-6">Technological Expertise</h2>
            <div className="w-20 h-1.5 accent-bg mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg font-medium">Reliable solutions tailored for high-compliance government and enterprise sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Server className="w-8 h-8" />}
              title="IT Infrastructure"
              desc="Comprehensive networking, data center solutions, and campus-wide hardware deployments."
            />
            <ServiceCard 
              icon={<Shield className="w-8 h-8" />}
              title="Advanced Security"
              desc="High-definition surveillance, AI monitoring, and biometric integrated access control."
            />
            <ServiceCard 
              icon={<Laptop className="w-8 h-8" />}
              title="Hardware Procurement"
              desc="Quality supply of workstations, interactive panels, and professional office technology."
            />
            <ServiceCard 
              icon={<BarChart3 className="w-8 h-8" />}
              title="GeM Portal Fulfiller"
              desc="Streamlined procurement for various ministries and government departments via GeM."
            />
            <ServiceCard 
              icon={<Building2 className="w-8 h-8" />}
              title="Smart Solutions"
              desc="Modernizing public infrastructure through smart technology integrations."
            />
            <ServiceCard 
              icon={<Award className="w-8 h-8" />}
              title="AMC Services"
              desc="End-to-end maintenance contracts to ensure zero downtime for critical systems."
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-white border border-grey text-navy-text font-bold rounded-md hover:bg-slate-50 transition-all shadow-sm">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 accent-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Secure Your Infrastructure?</h2>
          <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium">
            Join the numerous government and private organizations that trust Vikash Techsec for their technology needs.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-md font-extrabold hover:bg-slate-50 transition-all inline-block shadow-2xl uppercase tracking-wider text-sm">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="bg-white p-10 rounded-xl border border-grey hover:border-blue-600 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all group cursor-default">
    <div className="text-blue-600 mb-8 transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl font-bold navy-text mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-sm">{desc}</p>
  </div>
);

export default Home;