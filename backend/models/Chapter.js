const mongoose = require("mongoose");
const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  materials: [{ type: String }], // URLs to materials (PDFs, videos)
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Chapter", chapterSchema);
