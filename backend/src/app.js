const express = require("express");


const app = express();
app.use(express.json());

let problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    status: "solved",
    difficulty: "easy",
    link: "https://leetcode.com/problems/two-sum",
    lastUpdate: new Date()
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

  res.status(201).json({
    message: "Problem added successfully"
  });
});

app.patch("/problems/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = problems.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: "Problem not found" });
  }

  problems[index] = {
    ...problems[index],
    ...req.body
  };

  res.status(200).json({
    message: "Problem updated successfully",
    // problem: problems[index]
  });
});


module.exports = app;