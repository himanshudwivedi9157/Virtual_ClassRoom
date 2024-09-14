const mongoose = require("mongoose");
const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
});

module.exports = mongoose.model("Unit", unitSchema);
