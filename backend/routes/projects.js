const express = require("express");
const router = express.Router();
const { getProjects, createProject } = require("../controllers/projectController");

// GET all projects
router.get("/", getProjects);

// POST new project (for demo)
router.post("/", createProject);

module.exports = router;
