const Notes = require("../models/Notes");

/*  @desc -> Create Note 
    @route -> POST /note
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
    @route -> GET /notes
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

/*  @desc -> Update Note 
    @route -> PUT /note
    @access -> Public
*/
exports.updateNote = async (req, res, next) => {
  try {
    const updatedData = await Notes.findByIdAndUpdate(
      req.body.id,
      {
        ...req.body,
        lastModified: new Date(),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }
    return res.status(200).json({
      data: updatedData,
      message: `Note with id: ${req.body.id} is now Updated successfully!`,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Delete Note 
    @route -> DELETE /note
    @access -> Public
*/
exports.deleteNote = async (req, res, next) => {
  try {
    const deletedData = await Notes.findByIdAndDelete(req.body.id);
    return res.status(200).json({
      data: deletedData,
      message: `Note with id: ${req.body.id} is now Deleted successfully!`,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Delete all Notes 
    @route -> DELETE /notes
    @access -> Public
*/
exports.deleteAllNotes = async (req, res, next) => {
  try {
    const deleteAllData = await Notes.deleteMany({});
    return res.status(200).json({
      data: deleteAllData,
      message: "All Notes are now Deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Search Note 
    @route -> GET /note/search/:searchKey
    @access -> Public
*/
exports.getNotesBySearch = async (req, res, next) => {
  const query = {};
  try {
    query.$or = [{ text: { $regex: req.params.searchKey, $options: "i" } }];

    const searchData = await Notes.find(req.params.searchKey ? query : {});
    return res.status(200).json({
      data: searchData,
      message: "This are the notes according to your search!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
};
