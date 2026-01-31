import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Globe,
  Star,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `New Inquiry from ${formState.name}`;
    const body = `
Name: ${formState.name}
Phone: ${formState.phone}
Email: ${formState.email}
Organization: ${formState.organization}

Message:
${formState.message}
    `;

    window.location.href = `mailto:hr@vtpl.org.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setLoading(false);
      setFormState({
        name: "",
        phone: "",
        email: "",
        organization: "",
        message: "",
      });
    }, 500);
  };

  const offices = [
    {
      city: "Ranchi Hub",
      address: "Saluja Mansion, Sujata Chowk, Ranchi, Jharkhand - 834001",
      phone: "+91 90651 26999",
      email: "adminrnc@vtpl.org.in",
      isMain: true,
    },
    {
      city: "Patna Office",
      address: "Boring Road, Patna, Bihar - 800001",
      phone: "+91 90652 12999",
      email: "salespatna@vtpl.org.in",
      isMain: false,
    },
    {
      city: "Kolkata Hub",
      address: "A J C Bose Road, Kolkata, West Bengal - 700017",
      phone: "+91 90651 04999",
      email: "kolsales@vtpl.org.in",
      isMain: false,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

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
            Contact Our Sales Desk
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
            Official quotations, tenders & technical consultations — we’re ready.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

        {/* OFFICES */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
  {offices.map((office, idx) => (
    <div
      key={idx}
      className="
        bg-white p-10 rounded-2xl
        border border-slate-200
        shadow-xl
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      <h3 className="font-bold text-xl mb-6 flex items-center">
        {office.isMain ? (
          <Star className="text-blue-600 mr-2 animate-pulse" />
        ) : (
          <Globe className="text-blue-600 mr-2" />
        )}
        {office.city}
      </h3>

      <div className="space-y-6 text-sm font-medium text-slate-600">
        <div className="flex items-start space-x-3">
          <MapPin className="text-blue-600 w-5 h-5 mt-0.5" />
          <p>{office.address}</p>
        </div>

        <a
          href={`tel:${office.phone}`}
          className="flex items-center space-x-3 hover:text-blue-600 transition"
        >
          <Phone className="w-5 h-5" />
          <span>{office.phone}</span>
        </a>

        <a
          href={`mailto:${office.email}`}
          className="flex items-center space-x-3 text-blue-600 font-bold hover:underline"
        >
          <Mail className="w-5 h-5" />
          <span>{office.email}</span>
        </a>
      </div>
    </div>
  ))}
</div>

          {/* FORM + MAP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* FORM */}
            <div className="bg-white p-12 rounded-3xl shadow-xl border">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <MessageSquare className="text-blue-600 mr-3" />
                Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    required
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-md border bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-md border bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full col-span-full px-5 py-4 rounded-md border bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>

                <input
                  required
                  placeholder="Organization / Department"
                  className="w-full px-5 py-4 rounded-md border bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                  value={formState.organization}
                  onChange={(e) =>
                    setFormState({ ...formState, organization: e.target.value })
                  }
                />

                <textarea
                  required
                  rows={5}
                  placeholder="Requirements / Message"
                  className="w-full px-5 py-4 rounded-md border bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 rounded-md font-bold uppercase tracking-widest transition ${
                    loading
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  {loading ? "Opening Mail..." : "Submit Enquiry"}
                </button>
              </form>
            </div>

            {/* MAP (FIXED & VISIBLE) */}
            <div className="min-h-[520px] rounded-3xl overflow-hidden shadow-xl border">
              <iframe
                title="VTPL Ranchi Office"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.757452285303!2d85.31990487532381!3d23.354687378942447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e143b43dd149%3A0x1b31b1fd027ccf53!2sVikash%20Techsec%20Private%20Limited!5e0!3m2!1sen!2sin!4v1769754831446"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
