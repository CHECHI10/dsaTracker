const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const problemModel = require("./models/prob.model");


const app = express();
app.use(cors());
app.use(express.json());

const getErrorStatus = (error) => {
  if (error.name === "ValidationError" || error.name === "CastError") {
    return 400;
  }

  return 500;
};

app.get("/problems", async (req, res) => {
  try {
    const problems = await problemModel.find().sort({ lastUpdate: -1 });
    res.status(200).json(problems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post("/problems", async (req, res) => {
  try {
    const { title, difficulty, platform, link, status } = req.body;
    const problem = await problemModel.create({
      title,
      difficulty,
      platform,
      link,
      status
    });
    res.status(201).json(problem);
  } catch (error) {
    res.status(getErrorStatus(error)).json({ error: error.message });
  }
});

app.patch("/problems/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid problem id" });
    }

    const existingProblem = await problemModel.findById(id);
    if (!existingProblem) {
      return res.status(404).json({ error: "Problem not found" });
    }

    const allowedFields = ["title", "platform", "status", "difficulty", "link"];
    const updateData = {};

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    if (
      updateData.status &&
      updateData.status !== existingProblem.status
    ) {
      updateData.lastUpdate = new Date();
    }

    const updatedProblem = await problemModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedProblem);
  } catch (error) {
    res.status(getErrorStatus(error)).json({ error: error.message });
  }
});


app.delete('/problems/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid problem id" });
    }

    const deleted = await problemModel.findByIdAndDelete(id);

    if(!deleted) {
      return res.status(404).json({ error: "Problem not found" });
    }

    res.status(200).json({ message: "Problem deleted successfully" });
  } catch (error) {
    res.status(getErrorStatus(error)).json({ error: error.message });
  }

});

app.delete('/problems', async (req, res) => {
  try {
    await problemModel.deleteMany({});
    res.status(200).json({ message: "All problems deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


module.exports = app;
