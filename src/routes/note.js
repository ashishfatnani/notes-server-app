const express = require("express");
const router = express.Router();
const { validateNote } = require("../utils/validators");
const { createNote, updateNote, deleteNote } = require("../controllers/notes");

/* ------------------------ TODO-4 - Create New Note ------------------------ */
router.route("/note").post(createNote);
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-5 - Update A Note ------------------------- */
router.route("/note").put(updateNote);
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-6 - Delete A Note ------------------------- */
router.route("/note").delete(deleteNote);
/* -------------------------------------------------------------------------- */

module.exports = router;
