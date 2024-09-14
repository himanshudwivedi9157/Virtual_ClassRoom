// models/Class.js
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const SessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  comments: [CommentSchema],
});

const UnitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sessions: [SessionSchema],
});

const ClassSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  units: [UnitSchema],
});

module.exports = mongoose.model("Class", ClassSchema);
