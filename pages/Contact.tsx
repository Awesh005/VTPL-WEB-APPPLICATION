
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our team will contact you shortly.');
  };

  const offices = [
    { city: "Ranchi Hub", address: "Saluja Mansion, Sujata Chowk, Ranchi, Jharkhand - 834001", phone: "+91 90651 26999", email: "adminrnc@vtpl.org.in", isMain: true },
    { city: "Patna Office", address: "Boring Road, Patna, Bihar - 800001", phone: "+91 90652 12999", email: "salespatna@vtpl.org.in", isMain: false },
    { city: "Kolkata Hub", address: "A J C Bose Road, Kolkata, West Bengal - 700017", phone: "+91 90651 04999", email: "kolsales@vtpl.org.in", isMain: false }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-[#0B1F3A] py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Sales Desk</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Reach out for official quotations, tender queries, or technical consultations.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {offices.map((office, idx) => (
              <div key={idx} className={`bg-white p-10 rounded-xl border transition-all ${office.isMain ? 'border-blue-600 shadow-xl' : 'border-grey shadow-sm'}`}>
                <h3 className="font-bold text-xl navy-text mb-6 flex items-center">
                   {office.isMain ? <Star className="text-blue-600 mr-2" size={20} /> : <Globe className="text-blue-600 mr-2" size={20} />}
                   {office.city}
                </h3>
                <div className="space-y-6 text-sm font-medium">
                  <div className="flex items-start space-x-3 text-slate-600">
                    <MapPin className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Phone className="text-blue-600 w-5 h-5" />
                    <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3 text-blue-600 font-bold">
                    <Mail className="w-5 h-5" />
                    <p>{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-grey">
              <h3 className="text-2xl font-bold navy-text mb-8 flex items-center">
                <MessageSquare className="text-blue-600 mr-3" />
                Inquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" required placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-md border border-grey bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                    value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                  <input 
                    type="email" required placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-md border border-grey bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                    value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <input 
                  type="text" required placeholder="Organization / Department"
                  className="w-full px-5 py-4 rounded-md border border-grey bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                  value={formState.organization} onChange={(e) => setFormState({...formState, organization: e.target.value})}
                />
                <textarea 
                  rows={5} required placeholder="Requirements / Message"
                  className="w-full px-5 py-4 rounded-md border border-grey bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                  value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
                <button type="submit" className="accent-bg text-white w-full py-5 rounded-md font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
                  Submit Enquiry
                </button>
              </form>
            </div>
            
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-grey relative">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.623431327142!2d85.3248888!3d23.3653194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e10b10b0b0b1%3A0x10b0b0b0b0b0b0b1!2sSujata%20Chowk%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Ranchi Main Office"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;