import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>

      <ProjectCard
        title="AI Chatbot"
        desc="ChatGPT-like chatbot using OpenAI API"
      />

      <ProjectCard
        title="ERP System"
        desc="Full-stack school ERP system"
      />
    </div>
  );
}