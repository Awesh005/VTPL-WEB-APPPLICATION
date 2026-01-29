import { FC } from "react";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Corporate Tech"
          className="w-full h-full object-cover opacity-25"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r
                   from-orange-500/70
                   via-orange-400/20
                   to-slate-900"
      />

      {/* Floating Orange Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px]
                   bg-orange-500/30
                   blur-3xl rounded-full
                   top-1/3 left-1/4"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Smart <span className="text-orange-400">Digital Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Build faster. Scale smarter. Grow digitally.
        </p>
      </motion.div>

    </section>
  );
};

export default HeroSection;
