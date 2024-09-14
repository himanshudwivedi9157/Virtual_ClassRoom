// controllers/commentController.js
const Class = require("../models/Class");

const getComments = async (req, res) => {
  try {
    const classData = await Class.findOne(
      { "units.sessions._id": req.params.sessionId },
      { "units.sessions.$": 1 }
    );
    if (!classData)
      return res.status(404).json({ message: "Session not found" });
    const session = classData.units
      .flatMap((unit) => unit.sessions)
      .find((sess) => sess._id.toString() === req.params.sessionId);
    res.json(session.comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const classData = await Class.findOne({
      "units.sessions._id": req.params.sessionId,
    });
    if (!classData)
      return res.status(404).json({ message: "Session not found" });
    const session = classData.units
      .flatMap((unit) => unit.sessions)
      .find((sess) => sess._id.toString() === req.params.sessionId);
    session.comments.push({ text, user: req.user.id });
    await classData.save();
    res.status(201).json(session.comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getComments, addComment };
