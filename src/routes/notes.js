const { Router } = require("express");
const router = Router();

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/notes.controller");

router.route("/").get(getNotes).post(createNote);

// patch uodate only one property of some data
// put update one complete data
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
