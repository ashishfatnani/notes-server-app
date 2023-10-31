const express = require("express");
const router = express.Router();
const { validateNoteArray } = require("../utils/validators");
const {
  getAllNotes,
  deleteAllNotes,
  getNotesBySearch,
} = require("../controllers/notes");

/* ------------------------ TODO-3 - Fetch All Notes ------------------------ */
router.route("/notes").get(getAllNotes);
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-7 - Search Notes -------------------------- */
router.route("/notes/search/:searchKey").get(getNotesBySearch);
/* -------------------------------------------------------------------------- */

/* ----------------------- TODO-8 - Delete All Notes ------------------------ */
router.route("/notes").delete(deleteAllNotes);
/* -------------------------------------------------------------------------- */

module.exports = router;
