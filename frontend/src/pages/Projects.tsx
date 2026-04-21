import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { api } from '../services/api';

interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  highlight?: string;
  featured?: boolean;
  github?: string;
  liveDemo?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects').catch(() => ({ data: [] }));
        setProjects(res.data);
        setError(false);
      } catch (err) {
        setError(true);
        // Fallback data
        setProjects([
          {
            id: 1,
            title: "Automated Attendance Management System",
            description: "Developed a biometric solution using facial recognition to automate classroom/office attendance. This project streamlined logging processes and eliminated manual entry errors using advanced computer vision libraries.",
            tech: ["Python", "OpenCV", "dlib"],
            link: "https://github.com/abhi/attendance-system",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
          },
          {
            id: 2,
            title: "AI-Driven Deception Detection System",
            description: "A sophisticated tool designed to analyze physical stress markers and facial micro-expressions to identify potential indicators of deception in real-time.",
            tech: ["FastAPI", "MediaPipe", "Python"],
            link: "https://github.com/abhi/deception-detection",
            image: "https://images.unsplash.com/photo-1524609139065-3bfd55075b92?w=500&h=300&fit=crop"
          },
          {
            id: 3,
            title: "Interactive Game Suite",
            description: "Built a collaborative suite of 8 web-based games, focusing on responsive design, state management, and seamless user interaction without external frameworks.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            link: "https://github.com/abhi/game-suite",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My best work that showcases skills in AI, full-stack development, and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence>
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-3xl p-8 h-96 bg-gray-200 dark:bg-gray-800 animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-48 rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse mb-6" />
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4 animate-pulse w-3/4" />
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2 animate-pulse w-1/2" />
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse w-1/3" />
                </motion.div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-20">
                <div className="text-6xl text-gray-400 mb-8">📂</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Projects temporarily unavailable
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Showing featured projects instead
                </p>
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} featured={index === 0} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        {projects.length > 0 && (
          <motion.div 
            className="text-center mt-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="group px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <motion.span 
                className="ml-2 inline-block group-hover:translate-x-2 transition-transform"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;

