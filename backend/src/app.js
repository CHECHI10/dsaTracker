const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

let problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    status: "solved",
    difficulty: "easy",
    lastUpdate: new Date(),
    link: "https://leetcode.com/problems/two-sum"
  }
];

app.get("/problems", (req, res) => {
  res.status(200).json(problems);
})

app.post("/problems", (req, res) => {
  const { title, platform, status, difficulty, link } = req.body;

  if (!title || !status || !difficulty) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newProblem = {
    id: Date.now(),
    title,
    platform: platform || "LeetCode",
    status,
    difficulty,
    link: link || "",
    lastUpdate: new Date()
  };

  problems = [newProblem, ...problems];

  res.status(201).json(newProblem);
});

app.patch("/problems/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = problems.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Problem not found" });
  }

  problems[index] = {
    ...problems[index],
    ...req.body,
    lastUpdate:
      req.body.status && req.body.status !== problems[index].status
        ? new Date()
        : problems[index].lastUpdate
  };

  res.status(200).json(problems[index]);
});

app.delete('/problems/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = problems.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Problem not found" });
  }

  problems = problems.filter(p => p.id !== id);

  res.status(200).json({ message: "Problem deleted successfully" });
})

app.delete('/problems', (req, res) => {
  if (problems.length === 0) {
    return res.status(400).json({ error: "No problems to delete" });
  }

  problems = [];
  res.status(200).json({ message: "All problems deleted successfully" });
})


module.exports = app;