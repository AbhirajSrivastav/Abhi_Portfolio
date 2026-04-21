import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, Award } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tech: string[];
  highlight: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  highlight,
  featured,
  github,
  liveDemo,
  image = '/api/placeholder/500/300?text=' + encodeURIComponent(title.substring(0, 4))
}) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-gradient-to-b from-white/80 via-white/20 to-gray-100/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/40 shadow-xl hover:shadow-2xl hover:border-white/30 dark:hover:border-gray-600/50 overflow-hidden h-full"
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          className="absolute top-6 left-6 z-20 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Award className="w-4 h-4" />
          Featured
        </motion.div>
      )}

      {/* Image Overlay */}
      <div className="relative mb-8 h-48 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.h3 
          className="text-2xl md:text-2xl lg:text-3xl font-black mb-4 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.slice(0, 5).map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/40 dark:to-purple-900/40 backdrop-blur-sm rounded-xl text-sm font-semibold text-blue-800 dark:text-blue-200 border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-200/70 dark:hover:bg-blue-800/60 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
          {tech.length > 5 && (
            <span className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl">
              +{tech.length - 5} more
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {/* Highlight */}
        <motion.div 
          className="mb-8 p-4 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-2xl border-l-4 border-emerald-400 shadow-inner backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 -ml-1">
              <Star className="w-4 h-4 text-white" />
            </div>
            <p className="text-emerald-900 dark:text-emerald-100 font-semibold leading-relaxed">
              {highlight}
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {liveDemo && (
            <motion.a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 flex-1 px-6 py-4 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Code
              <Github className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Tilt Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{ 
          rotateX: 2, 
          rotateY: 2 
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;

