
import React from 'react';
// @ts-ignore - Suppressing named export errors from react-router-dom due to potential environment type mismatch
import { Link } from 'react-router-dom';
import { 
  Monitor, Laptop, Layout, Printer, Copy, Cpu, 
  Scan, Wind, MonitorPlay, BatteryCharging, 
  Video, Projector, Tv, Cctv, Box, ArrowRight
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const productList: Product[] = [
  { id: 'desktop', name: 'Desktop Computer', description: 'Business-grade workstations for office and education.', icon: <Monitor size={24} />, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800' },
  { id: 'laptop', name: 'Laptop', description: 'Premium portable systems for modern professionals.', icon: <Laptop size={24} />, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800' },
  { id: 'aio', name: 'All In One PC', description: 'Space-saving computing solutions with integrated displays.', icon: <Layout size={24} />, image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=800' },
  { id: 'printer', name: 'Printer', description: 'Enterprise-scale document printing and imaging.', icon: <Printer size={24} />, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800' },
  { id: 'ipc', name: 'Interactive Panel', description: 'Smart touch panels for education and boardrooms.', icon: <MonitorPlay size={24} />, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' },
  { id: 'cctv', name: 'CCTV', description: 'High-definition monitoring for total premise security.', icon: <Cctv size={24} />, image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800' },
  { id: 'ups', name: 'UPS Systems', description: 'Critical power backup for continuous operations.', icon: <BatteryCharging size={24} />, image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800' },
  { id: 'workstation', name: 'Workstation', description: 'Heavy-duty computing for engineering and graphics.', icon: <Cpu size={24} />, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
];

const Products: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1F3A] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Catalog</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Authorized hardware supply for government and corporate organizations.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Inquiry */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="text-white mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Bulk Procurement Quote</h2>
              <p className="text-slate-400 max-w-lg font-medium">
                Looking for large-scale supply? We specialize in tender-compliant bulk orders for various institutions.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="accent-bg text-white px-10 py-4 rounded-md font-bold hover:bg-blue-700 transition-all shadow-xl flex items-center group"
            >
              Get Bulk Pricing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-grey shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 bg-white p-2.5 rounded-md shadow-md text-blue-600">
          {product.icon}
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-lg font-bold navy-text mb-3">{product.name}</h3>
        <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 flex-grow">
          {product.description}
        </p>
        <Link 
          to="/contact" 
          state={{ productInquiry: product.name }}
          className="w-full py-3 bg-slate-50 text-navy-text font-bold rounded-md text-sm border border-grey hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Products;