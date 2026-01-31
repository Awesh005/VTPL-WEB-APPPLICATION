import React, { useState } from "react";
import { ArrowRight, Mail, Briefcase, MapPin, Sparkles } from "lucide-react";

/* ================= TYPES ================= */
type JobRole = {
  title: string;
  desc: string;
  details: string;
};

/* ================= DATA ================= */
const POSITIONS: JobRole[] = [
  {
    title: "Bidding Executive",
    desc: "Handle GeM & government bids with precision and strategy.",
    details:
      "Prepare, submit, and manage government & GeM tenders. Coordinate with OEMs, ensure compliance, pricing strategy, and post-bid documentation.",
  },
  {
    title: "Accountant",
    desc: "Manage finance, GST, and compliance with accuracy.",
    details:
      "Handle bookkeeping, GST returns, TDS, audits, invoicing, and financial reporting while ensuring statutory compliance.",
  },
  {
    title: "Salesperson",
    desc: "Drive growth through enterprise & institutional sales.",
    details:
      "Identify new clients, pitch solutions, close deals, maintain relationships, and achieve sales targets across assigned regions.",
  },
  {
    title: "Front Office Executive",
    desc: "Be the face of our offices and manage communication.",
    details:
      "Handle front desk operations, calls, visitors, documentation, and coordination between departments.",
  },
  {
    title: "Product Line Expert",
    desc: "Own and grow specific technology product verticals.",
    details:
      "Manage assigned product lines, vendor coordination, demos, technical understanding, and sales enablement.",
  },
];

/* ================= COMPONENTS ================= */
interface JobCardProps {
  role: JobRole;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ role, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition cursor-pointer"
  >
    <div className="flex justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{role.title}</h3>
        <p className="text-slate-600 text-sm">{role.desc}</p>
      </div>

      <div className="bg-blue-50 p-2 h-10 rounded-xl group-hover:bg-blue-600 transition">
        <Briefcase className="w-5 h-5 text-blue-600 group-hover:text-white" />
      </div>
    </div>

    <div className="mt-6 flex items-center text-blue-600 font-semibold gap-2">
      <span>Apply Now</span>
      <ArrowRight className="w-4 h-4" />
    </div>
  </div>
);

/* ================= MAIN ================= */
const Careers: React.FC = () => {
  const [activeRole, setActiveRole] = useState<JobRole | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative h-[320px] flex items-center overflow-hidden">
        <img
          src="/images/P.jpg"
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#06162a]/95 via-[#0b2545]/85 to-[#0b2545]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm">Careers at VTPL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build Your Career With Us
          </h1>
          <p className="text-slate-200 max-w-2xl text-lg">
            Join a fast-growing technology & security company shaping smart
            infrastructure across India.
          </p>
        </div>
      </section>

      {/* ===== JOBS ===== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Open Positions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {POSITIONS.map((role) => (
              <JobCard
                key={role.title}
                role={role}
                onClick={() => setActiveRole(role)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="py-16 text-center">
        <div className="inline-flex items-center gap-2 text-slate-500">
          <MapPin className="w-4 h-4" />
          <p className="text-sm font-semibold tracking-widest uppercase">
            Ranchi • Patna • Kolkata
          </p>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {activeRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setActiveRole(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-2xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveRole(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">
              {activeRole.title}
            </h3>
            <p className="text-slate-600 mb-4">{activeRole.desc}</p>

            <h4 className="font-semibold mb-2">Key Responsibilities</h4>
            <p className="text-slate-600 text-sm mb-6">
              {activeRole.details}
            </p>

            <a
              href={`mailto:hr@vtpl.org.in?subject=Application for ${activeRole.title}`}
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl font-bold text-white"
            >
              <Mail className="w-5 h-5" />
              Apply via Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
