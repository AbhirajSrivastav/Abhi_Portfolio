import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';
import ResumeSection from '../components/ResumeSection';

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
          >
            My Resume
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Download or view my latest resume with complete work experience and skills
          </p>
        </motion.div>
        
        <ResumeSection />
      </div>
    </motion.div>
  );
};

export default Resume;

