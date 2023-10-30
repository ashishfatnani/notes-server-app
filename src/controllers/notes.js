const Notes = require("../models/Notes");

/*  @desc -> Create Note 
    @route -> POST /api/v1/notes
    @access -> Public
*/
exports.createNote = async (req, res, next) => {
  try {
    const createData = await Notes.create({
      ...req.body,
    });
    return res.status(201).json({
      data: createData,
      message: "Note Created successfully !",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Get all Notes 
    @route -> GET /api/v1/notes
    @access -> Public
*/

exports.getAllNotes = async (req, res, next) => {
  try {
    const notesData = await Notes.find();
    return res.status(200).json({
      data: notesData,
      message: "This is the list of Notes Data",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const updatedData = await Notes.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    return res.status(200).json({
      data: updatedData,
      message: "Note is now Updated successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const deletedData = await Notes.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: deletedData,
      message: "Note is now Deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};
