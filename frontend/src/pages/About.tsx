import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Video, GraduationCap, Lightbulb, Users } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About: React.FC = () => {
  const theme = useContext(ThemeContext);

  const skills = [
    { name: 'Python', icon: '🐍', color: 'from-emerald-500 to-green-600' },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-500 to-indigo-600' },
    { name: 'FastAPI', icon: '⚡', color: 'from-orange-500 to-yellow-500' },
    { name: 'OpenCV', icon: '👁️', color: 'from-purple-500 to-pink-600' },
    { name: 'MediaPipe', icon: '🤲', color: 'from-teal-500 to-cyan-500' },
    { name: 'AWS', icon: '☁️', color: 'from-yellow-400 to-orange-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <motion.section 
          className="text-center mb-24 lg:mb-32" 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.01 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
              Abhi
            </span>
          </motion.h1>
          
          <motion.div 
            className="inline-flex items-center gap-6 flex-wrap justify-center mb-12 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-blue-800 dark:text-blue-200 font-semibold text-lg backdrop-blur-sm">
              <Brain className="w-5 h-5" />
              AI Specialist
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-full text-emerald-800 dark:text-emerald-200 font-semibold text-lg backdrop-blur-sm">
              <Code className="w-5 h-5" />
              Full-Stack Developer
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 rounded-full text-rose-800 dark:text-rose-200 font-semibold text-lg backdrop-blur-sm">
              <Video className="w-5 h-5" />
              Content Creator
            </div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Final-year BCA student crafting intelligent systems at the intersection of{' '}
            <span className="font-semibold text-gray-900 dark:text-white">AI + Web Development</span>
          </motion.p>
        </motion.section>

        {/* Professional Summary Card */}
        <motion.section 
          className="max-w-4xl mx-auto" 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="glass backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl mt-1">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:scale-[1.01] transition-transform">
                  Professional Summary
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert leading-relaxed space-y-6 text-lg lg:text-xl">
              <p>
                Building the future at <span className="font-semibold text-gray-900 dark:text-white">St. Xavier's College of Management & Technology</span> — 
                where automated intelligence meets user-centric design. From{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">facial recognition attendance systems</span> to{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">AI-driven stress analysis</span>, 
                I create scalable solutions for real-world problems.
              </p>

              <p className="glass p-6 rounded-2xl bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-900/20 dark:to-blue-900/20 border border-emerald-200/30 dark:border-emerald-800/50 shadow-inner">
                <span className="font-semibold text-emerald-800 dark:text-emerald-200">Beyond code:</span> Digital storyteller managing{' '}
                <span className="font-semibold text-orange-600 dark:text-orange-400">YouTube channels</span> (AviVlogs, SketchSaga), 
                mastering audience engagement, SEO, and simplified technical communication.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50/50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-200/50 dark:border-indigo-800/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Academic Tutor</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Math, Science, Computer Science</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-yellow-50 to-orange-50/50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl border border-yellow-200/50 dark:border-yellow-800/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">30-Day Challenge</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vlogging consistency mastery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Quick Stats */}
        <motion.section 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4">
              BCA 2023-2026
            </div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">St. Xavier's College</h3>
            <p className="text-gray-600 dark:text-gray-400">Patna</p>
          </div>

          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4">
              AWS Certified
            </div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Solutions Architect</h3>
            <p className="text-gray-600 dark:text-gray-400">APAC (Forage)</p>
          </div>

          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
              PCM Higher Secondary
            </div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">R.P.S Public School</h3>
            <p className="text-gray-600 dark:text-gray-400">Patna</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;

