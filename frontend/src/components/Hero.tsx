import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-lg"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight bg-gradient-to-r from-gray-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span>Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Abhi
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full-Stack Developer | AI Enthusiast | Content Creator
            </motion.div>

            {/* Specializing */}
            <motion.div 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Specializing in Agentic AI, Computer Vision, and Interactive Web Experiences
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a 
              href="/projects"
              className="group relative px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a 
              href="/chat"
              className="px-10 py-5 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to AI Assistant
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 p-6 md:p-8 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="/profile.jpg" 
                alt="Abhi - Full Stack Developer & AI Enthusiast"
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/30 dark:border-gray-800/50 group-hover:border-white/50 transition-all duration-500"
                onError={(e: any) => {
                  (e.target as HTMLImageElement).src = 'https://api.placeholderco.com/400/400?text=Abhi';
                }}
              />
            </div>
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500"
              animate={{ scale: 1.1 }}
              initial={{ scale: 0.9 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

