import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Clock } from 'lucide-react';
import { api } from '../services/api';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const addMessage = (role: Message['role'], content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading || isTyping) return;

    const userMessage = input.trim();
    addMessage('user', userMessage);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock AI response - replace with real API
      const responses = [
        "Abhi is a full-stack developer specializing in AI and computer vision. He's currently working on agentic AI projects!",
        "Check out Abhi's featured projects: Automated Attendance System using OpenCV, Deception Detection with MediaPipe, and Interactive Game Suite.",
        "Abhi is a final-year BCA student at St. Xavier's College. He's also a content creator with YouTube channels like AviVlogs!",
        "Abhi's technical skills include Python (FastAPI, OpenCV), React.js, Node.js, MediaPipe, AWS, and more.",
        "You can view Abhi's complete portfolio on the Projects page or learn more on the About page!"
      ];
      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setTimeout(() => {
        addMessage('assistant', aiResponse);
        setIsTyping(false);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      addMessage('assistant', "Sorry, I'm having trouble connecting right now. Please try again! 🤖");
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl mx-auto h-[600px] md:h-[700px] lg:h-[750px] bg-gradient-to-b from-slate-50 to-blue-50/50 dark:from-gray-900/80 dark:to-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="glass p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              AI Portfolio Assistant
            </h2>
            <div className="flex items-center gap-2 text-sm text-green-500 font-medium mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {/* Empty State */}
        {messages.length === 0 && !isTyping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center py-12 text-gray-500 dark:text-gray-400 space-y-4"
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Bot className="w-12 h-12 text-gray-400" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Ask me anything about Abhi's portfolio!
              </h3>
              <p className="text-gray-500">I can help with projects, skills, experience, and more 🚀</p>
            </div>
          </motion.div>
        )}

        {/* Messages */}
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-lg p-5 rounded-2xl shadow-lg transform-gpu backdrop-blur-sm ${
                message.role === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40 ml-auto' 
                  : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl'
              }`}>
                <div className="flex items-start gap-3">
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 -ml-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    <div className={`text-xs mt-2 opacity-75 flex items-center gap-1 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="glass max-w-lg p-5 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 -ml-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="glass p-4 pt-0 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about projects, skills, experience..."
            className="flex-1 px-5 py-4 text-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 resize-none placeholder-gray-500"
            disabled={isLoading || isTyping}
            onFocus={() => scrollToBottom()}
          />
          <motion.button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-xl rounded-2xl text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:scale-[1.02] active:scale-95"
          >
            <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;

