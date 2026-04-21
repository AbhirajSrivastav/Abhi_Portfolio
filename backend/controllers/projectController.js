// Updated with Featured Projects data
const projects = [
  {
    id: 1,
    title: "Automated Attendance Management System",
    description: "Developed a biometric solution using facial recognition to automate classroom/office attendance. This project streamlined logging processes and eliminated manual entry errors using advanced computer vision libraries.",
    tech: ["Python", "OpenCV", "dlib"],
    link: "https://github.com/yourusername/attendance-system",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "AI-Driven Deception Detection System",
    description: "A sophisticated tool designed to analyze physical stress markers and facial micro-expressions to identify potential indicators of deception in real-time.",
    tech: ["FastAPI", "MediaPipe", "Python"],
    link: "https://github.com/yourusername/deception-detection",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Interactive Game Suite",
    description: "Built a collaborative suite of 8 web-based games, focusing on responsive design, state management, and seamless user interaction without external frameworks.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/yourusername/game-suite",
    image: "/api/placeholder/400/300"
  }
];

const getProjects = (req, res) => {
  res.json(projects);
};

const createProject = (req, res) => {
  const newProject = { id: projects.length + 1, ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
};

module.exports = { getProjects, createProject };
