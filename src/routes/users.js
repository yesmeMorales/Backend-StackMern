const { Router } = require("express");
// function Router executed
const router = Router();

const {
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");

// /users/id
router.route("/").get(getUsers).post(createUser);

router.route("/:id").get().put().delete(deleteUser);

module.exports = router;
