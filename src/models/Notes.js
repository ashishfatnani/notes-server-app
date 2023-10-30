const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text for note"],
      trim: true,
      maxlength: [200, "Note content can not be more than 200 characters"],
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Notes", NoteSchema);
