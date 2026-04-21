const express = require("express");
const cors = require("cors");
const projectRoutes = require("../routes/projects");
const skillsRoutes = require("../routes/skills");
const contactRoutes = require("../routes/contact");
const resumeRoutes = require("../routes/resume");
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Vite default port

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Mount routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
