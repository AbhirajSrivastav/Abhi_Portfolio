import React from 'react';
import { motion } from 'framer-motion';
import Chatbot from '../components/Chatbot';
import { Bot } from 'lucide-react';

const Chat: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div 
        className="text-center mb-16 max-w-2xl"
        initial={{ y: -50 }} 
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
          <Bot className="w-6 h-6" />
          <span className="font-semibold text-lg">AI Chat Assistant</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-6 leading-tight">
          Your AI Portfolio Guide
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
          Ask me anything about Abhi's projects, skills, experience, or education 🚀
        </p>
      </motion.div>
      
      <div className="w-full max-w-4xl">
        <Chatbot />
      </div>
    </motion.div>
  );
};

export default Chat;

