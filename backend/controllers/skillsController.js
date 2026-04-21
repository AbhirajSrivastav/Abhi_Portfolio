// Updated with Technical Arsenal
const skills = [
  // Languages
  { id: 1, name: "Python (OpenCV, dlib, FastAPI)", level: "Advanced", category: "Languages" },
  { id: 2, name: "Java", level: "Advanced", category: "Languages" },
  { id: 3, name: "JavaScript (ES6+)", level: "Advanced", category: "Languages" },
  { id: 4, name: "SQL", level: "Advanced", category: "Languages" },
  { id: 5, name: "HTML5", level: "Advanced", category: "Languages" },
  { id: 6, name: "CSS3", level: "Advanced", category: "Languages" },
  // Frameworks & Libraries
  { id: 7, name: "React.js", level: "Advanced", category: "Frameworks" },
  { id: 8, name: "Node.js", level: "Advanced", category: "Frameworks" },
  { id: 9, name: "MediaPipe", level: "Advanced", category: "Frameworks" },
  { id: 10, name: "NumPy", level: "Advanced", category: "Frameworks" },
  { id: 11, name: "Pandas", level: "Advanced", category: "Frameworks" },
  // Tools & Platforms
  { id: 12, name: "Git/GitHub", level: "Advanced", category: "Tools" },
  { id: 13, name: "AWS (Solutions Architecture)", level: "Intermediate", category: "Tools" },
  { id: 14, name: "VS Code", level: "Advanced", category: "Tools" }
];

const getSkills = (req, res) => {
  res.json(skills);
};

module.exports = { getSkills };
