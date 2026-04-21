import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { api } from '../services/api';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

interface Skill {
  id: number;
  name: string;
  level: string;
  category: string;
}

const Home: React.FC = () => {
  const theme = useContext(ThemeContext);
const [skills, setSkills] = useState<Skill[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [skillsRes, projectsRes] = await Promise.all([
          api.get('/skills').catch(() => ({ data: [] })),
          api.get('/projects').catch(() => ({ data: [] }))
        ]);
        setSkills(skillsRes.data);
        setFeaturedProjects(projectsRes.data);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    loadData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20"
    >
      <Hero />
      {/* Skills Section */}
      <section className="py-20">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        >
          Technical Arsenal
        </motion.h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="font-bold text-lg mb-1 dark:text-white">{skill.name}</div>
              <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                {skill.level}
              </div>
              <div className="text-xs text-gray-500 mt-1">{skill.category}</div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-20">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="glass px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Projects
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

