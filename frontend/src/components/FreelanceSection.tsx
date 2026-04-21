import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Code2, 
  Layers, 
  Zap, 
  Mail, 
  ArrowRight 
} from 'lucide-react';

interface Design {
  title: string;
  image: string;
  tools: string[];
  description: string;
}

const designs: Design[] = [
  {
    title: "Portfolio Dashboard UI",
    image: "https://images.unsplash.com/photo-1559028005-4c92b732553e?w=400&h=300&fit=crop&crop=center",
    tools: ["Figma", "Tailwind"],
    description: "Modern developer portfolio dashboard with real-time analytics"
  },
  {
    title: "SaaS Admin Panel",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    tools: ["Figma", "React"],
    description: "Clean admin dashboard with data visualization components"
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1612830788850-9f1a18d243f7?w=400&h=300&fit=crop&crop=center",
    tools: ["Figma", "Framer"],
    description: "Intuitive mobile banking interface with gesture controls"
  },
  {
    title: "E-commerce Product Page",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    tools: ["Figma", "Adobe XD"],
    description: "High-conversion product page with interactive 3D preview"
  }
];

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting beautiful, user-centered designs that convert visitors into customers.",
    icon: Palette,
    gradient: "from-rose-500 to-pink-600"
  },
  {
    title: "Frontend Development",
    description: "Building lightning-fast, responsive web applications using React + modern tooling.",
    icon: Code2,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Full-Stack Apps",
    description: "End-to-end solutions with React, Node.js, and scalable cloud architecture.",
    icon: Layers,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "AI Integration",
    description: "Adding intelligent features like chatbots, computer vision, and ML models.",
    icon: Zap,
    gradient: "from-purple-500 to-violet-600"
  }
];

interface ModalProps {
  isOpen: boolean;
  design: Design | null;
  onClose: () => void;
}

const DesignModal: React.FC<ModalProps> = ({ isOpen, design, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass bg-white/90 dark:bg-gray-900/90 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 shadow-2xl border border-white/30 dark:border-gray-700/50"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {design?.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {design?.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <img 
                src={design?.image || ''} 
                alt={design?.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {design?.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FreelanceSection: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDesign = (design: Design) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/30 dark:from-gray-900/80 dark:to-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6 leading-tight">
            Freelancing &{' '}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              UI/UX Work
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into beautiful, user-friendly, and high-performance digital experiences
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl p-10 text-center cursor-pointer hover:scale-105 transition-all duration-500 bg-gradient-to-b from-white/60 via-white/30 to-gray-100/50 dark:from-gray-900/70 dark:via-gray-800/60 dark:to-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 shadow-xl hover:shadow-2xl hover:border-white/40 dark:hover:border-gray-600/60"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:scale-105 transition-transform">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8 opacity-90">
                {service.description}
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:bg-white/80 transition-all duration-300 origin-center transform scale-x-0 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        {/* Design Showcase */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            UI/UX Design Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={design.title}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer h-80 hover:scale-105 transition-all duration-500 bg-gradient-to-b from-white/70 via-white/40 to-gray-100/30 dark:from-gray-900/60 dark:via-gray-800/50 dark:to-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openDesign(design)}
              >
                <img 
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {design.title}
                  </h4>
                  <div className="flex gap-2 mb-4">
                    {design.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Design
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Ready to work together?
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Looking for a modern, high-performance website or app? Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <motion.a 
              href="mailto:hello@abhi.dev"
              className="group flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a 
              href="/contact"
              className="group flex items-center justify-center gap-3 px-12 py-6 border-4 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 font-bold rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-gray-900 dark:text-gray-100 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <DesignModal isOpen={isModalOpen} design={selectedDesign} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

export default FreelanceSection;

